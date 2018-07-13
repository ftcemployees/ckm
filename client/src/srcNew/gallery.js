import React from 'react';
import Axios from 'axios';
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
        this.handleClick = this.handleClick.bind(this);

        this.loadMorePhotos = this.loadMorePhotos.bind(this);
    }

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
            }
        })
        .catch(function (error) {
            self.setState({data: []});
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

    }

    render() {
        return (
            <div style={{display: 'flex'}}>
                <Filter showFilter={this.props.showFilter} setFilter={(filter) => this.loadPhotos(filter)}/>
                <div className="gallery">
                    <div className="images">
                        {this.state.data.length ?
                            this.state.data.map((item, index) => {
                                return (
                                    <div key={item.id + '-container'} className={"pic-container"}>
                                        <div key={item.id} className={"pic"}
                                             onClick={() => this.handleClick(item, index)} title={item.id}>
                                            {item.id + ' ' + item.category + ' ' + item.gender + ' ' + item.item + ' ' + item.era + ' ' + item.description}
                                        </div>
                                    </div>
                                )
                            })
                            : <div className="no-results-message">No Results...</div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}