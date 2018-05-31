import React from 'react';
import Axios from 'axios';
import { Item } from './item';
import { PictureModal } from './picture-modal';

export class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            modalIsOpen: false,
            picIndex: 0,
            picView: {"id": 1},
            size: 300
        };
        this.componentWillMount = this.componentWillMount.bind(this);
        this.loadPhotos = this.loadPhotos.bind(this);
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.nextPic = this.nextPic.bind(this);
        this.prevPic = this.prevPic.bind(this);
    }

    openModal()         { this.setState({modalIsOpen: true}); }
    afterOpenModal()    { }
    closeModal()        { this.setState({modalIsOpen: false}); }

    componentWillMount() {
        this.loadPhotos();
    }

    async loadPhotos() {
        let self = this;
        Axios.get('/search')
        .then(function (response) {
            if (response.data.length > 0)
                self.setState({data: response.data});
            else
                self.setState({data: [{id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8},{id: 9},{id: 10},{id: 11},{id: 12},{id: 13},{id: 14},{id: 15}]})
        })
        .catch(function (error) {
            const dataTemp = [{id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8},{id: 9},{id: 10},{id: 11},{id: 12},{id: 13},{id: 14},{id: 15}];
            self.setState({data: dataTemp});
            console.log(error);
        });
    }

    handleClick(item, index) {
        this.setState({
            modalIsOpen: true,
            picIndex: index,
            picView: this.state.data[index]
        });
    }

    handleChange(event) {
        this.setState({size: event.target.value});
    }

    nextPic() {
        let index = this.state.picIndex < this.state.data.length - 1 ? this.state.picIndex + 1 : 0;
        console.log(index + " " + this.state.data[index]);
        this.setState({
            picIndex: index,
            picView: this.state.data[index]
        });
    }

    prevPic() {
        let index = this.state.picIndex > 0 ? this.state.picIndex - 1 : this.state.data.length - 1;
        this.setState({
            picIndex: index,
            picView: this.state.data[index]
        });
    }

    render() {
        return (
            <div className="gallery">
                <div className="toolbar">
                    <input type="range" min="100" max="500" defaultValue={this.state.size} onChange={this.handleChange} className="slider" id="myRange"/>
                </div>
                <div className="images">
                    <section className="main_section">
                        {this.state.data.map((item, index) => {
                            return(
                                <Item key={index}
                                      item={item}
                                      onClick={() => this.handleClick(item, index)}
                                      size={this.state.size}
                                />
                            )
                        })}
                    </section>
                </div>
                <div>
                    <PictureModal
                        modalIsOpen = {this.state.modalIsOpen}
                        picView = {this.state.picView}
                        nextPic={() => this.nextPic()}
                        prevPic={() => this.prevPic()}
                        openModal={() => this.openModal()}
                        afterOpenModal={() => this.afterOpenModal()}
                        closeModal={() => this.closeModal()}
                    />
                </div>
            </div>
        );
    }
}
