import React from 'react';
import Axios from 'axios';
import { Item } from './item';

export class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.componentWillMount = this.componentWillMount.bind(this);
        this.loadPhotos = this.loadPhotos.bind(this);
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
            console.log(error);
        });
    }

    render() {
        return (
            <div className="new_div">
                <section className="main_section">
                    {this.state.data.map(item => {
                        return(
                            <Item key={item.id}
                                  id={"pic-"+(item.id)+" pic"}
                                  category={item.category}
                                  gender={item.gender}
                                  item={item.item}
                                  style={item.style}
                                  era={item.era}
                                  description={item.description}
                                  branding={item.branding}
                                  measurement={item.measurement}
                                  history={item.history}
                            />
                        )
                    })}
                </section>
            </div>
        );
    }
}
