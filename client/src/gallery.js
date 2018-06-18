import React from 'react';
import Axios from 'axios';
import { PictureModal } from './picture-modal';
import { Filter } from "./filter";

export class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            modalIsOpen: false,
            picIndex: 0,
            picView: {"id": 1},
            size: 300,
            searchToken: {},
            lower_value: 0,
            isLoaded: true
        };
        this.componentWillMount = this.componentWillMount.bind(this);
        this.loadPhotos = this.loadPhotos.bind(this);
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.nextPic = this.nextPic.bind(this);
        this.prevPic = this.prevPic.bind(this);

        this.loadMorePhotos = this.loadMorePhotos.bind(this);
    }

    openModal()         { this.setState({modalIsOpen: true}); }
    afterOpenModal()    { }
    closeModal()        { this.setState({modalIsOpen: false}); }

    componentWillMount() {
        this.loadPhotos({
                era: [],
                category: [],
                gender: [],
                item: []
            });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
        if (
            (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 250) &&
            this.state.data.length && this.state.isLoaded
        ) {
            this.loadMorePhotos();
        }
    }

    async loadPhotos(searchToken) {
        this.setState({
            searchToken: searchToken,
            lower_value: 0});
        let self = this;
        Axios.get('/search', {
            params: {
                search: searchToken,
                lower: 0
            }
        })
        .then(function (response) {
            console.log(response.data.length);
            if (response.data.length > 0) {
                self.setState({data: response.data});
                self.setState({isLoaded: true})
            } else {
                self.setState({data: []})
                // self.setState({data: [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}, {id: 11}, {id: 12}, {id: 13}, {id: 14}, {id: 15}]})
            }
        })
        .catch(function (error) {
            self.setState({data: []});
            // const dataTemp = [{id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8},{id: 9},{id: 10},{id: 11},{id: 12},{id: 13},{id: 14},{id: 15}];
            // self.setState({data: dataTemp});
            console.log(error);
        });
    }

    async loadMorePhotos() {
        let self = this;
        self.setState({lower_value: this.state.lower_value + 50, isLoaded: false});
        Axios.get('/search', {
            params: {
                search: self.state.searchToken,
                lower: self.state.lower_value
            }
        })
            .then(function (response) {
                console.log(response.data.length);
                if (response.data.length > 0) {
                    self.setState({data: self.state.data.concat(response.data)});
                    self.setState({isLoaded: true})
                }
                else {
                    self.setState({isLoaded: true})
                }
            })
            .catch(function (error) {
                console.log(error);
                self.setState({isLoaded: true})
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
            <div style={{display: 'flex'}}>
                <Filter showFilter={this.props.showFilter} setFilter={(filter) => this.loadPhotos(filter)}/>
                <div className="gallery">
                    <div className="images">
                        {this.state.data.length ?
                            this.state.data.map((item, index) => {
                                const divStyle = {
                                    // backgroundImage: 'url(/img/' + item.id + '.jpg)'
                                };
                                return (
                                    <div key={item.id + '-container'} className={"pic-container"}>
                                        <div key={item.id} className={"pic"} style={divStyle}
                                             onClick={() => this.handleClick(item, index)} title={item.id}>
                                            {item.id + ' ' + item.category + ' ' + item.gender + ' ' + item.item + ' ' + item.era + ' ' + item.description}
                                        </div>
                                    </div>
                                )
                            })
                            : <div className="no-results-message">No Results...</div>
                        }
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
            </div>
        );
    }
}