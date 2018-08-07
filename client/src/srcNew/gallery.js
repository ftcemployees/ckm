import React from 'react';
import Axios from 'axios';
import { Filter } from "./filter";
const queryString = require('query-string');

export class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            size: 300,
            searchToken: {},
            lower_value: 0,
            isLoaded: true
        };
        this.componentWillMount = this.componentWillMount.bind(this);
        this.loadPhotos = this.loadPhotos.bind(this);
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
    componentWillReceiveProps(props) {
        let query = queryString.parse(props.location.search);
        Object.keys(query).map((filters) => (query[filters] = query[filters].split(',')));

        this.loadPhotos(query);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 250) &&
            this.state.data.length && this.state.isLoaded)
            this.loadMorePhotos();
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
                self.setState({isLoaded: true});
            } else
                self.setState({data: []});
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

    createItems = (item) => (
        <a key={item.id + '-container'} className="pic-container" href={`/gallery/${item.id}`}>
            <div key={item.id} className={"pic"} title={item.id}>
                {item.id + ' ' + item.category + ' ' + item.gender + ' ' + item.item + ' ' + item.era}
            </div>
        </a>
    )

    render() {
        return (
            <div style={{display: 'flex'}}>
                <Filter history={this.props.history} showFilter={this.props.showFilter} setFilter={(filter) => this.loadPhotos(filter)}/>
                <div className="gallery">
                    <div className="images">
                        {this.state.data.length ?
                            this.state.data.map(this.createItems)
                            : <div className="no-results-message">No Results...</div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}