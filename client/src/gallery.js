import React from 'react';
import Axios from 'axios';
import { Item } from './item';
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        maxWidth              : '50%',
        maxHeight             : '90%',
        width                 : '50%',
        transform             : 'translate(-50%, -50%)'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

export class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            modalIsOpen: false,
            picIndex: 0,
            picView: {"id": 1}
        };
        this.componentWillMount = this.componentWillMount.bind(this);
        this.loadPhotos = this.loadPhotos.bind(this);
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.nextPic = this.nextPic.bind(this);
        this.prevPic = this.prevPic.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    componentWillMount() {
        this.loadPhotos();
    }

    async loadPhotos() {
        var self = this;
        Axios.get('/search')
        .then(function (response) {
            self.setState({data: response.data});
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

    nextPic() {
        let index = this.state.picIndex < this.state.data.length - 1 ? this.state.picIndex + 1 : index = 0;
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
            <div className="new_div">
                <section className="main_section">
                    {this.state.data.map((item, index) => {
                        return(
                            <Item key={index}
                                  item={item}
                                  onClick={() => this.handleClick(item, index)}
                            />
                        )
                    })}
                </section>
                <div>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <section className="pic_main_section">
                            <p className="picName">The name of picture</p>

                            <div>
                                <i className="left" onClick={()=>this.prevPic()}></i>

                                <img  className="picView" src={'img/' + this.state.picView.id + '.jpg'} alt="1"/>

                                <i className="right" onClick={()=>this.nextPic()}></i>
                            </div>

                            <br/>
                            <p className="picDescription">
                                Description
                            </p>
                        </section>
                    </Modal>
                </div>
            </div>
        );
    }
}
