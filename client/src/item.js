import React from 'react';
import Axios from 'axios';

export class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            item_id: props.match.params.item_id
        };
    }
    componentWillMount() { this.loadItem(); }

    async loadItem() {
        let self = this;
        Axios.post('/singleItem', {
            item_id: self.state.item_id
        })
            .then(function (response) {
                if (response.data.length > 0) {
                    console.log(response.data)
                    self.setState({data: response.data[0]});
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="item-page">
                <h2>{Object.values(this.state.data)}</h2>
            </div>
        )
    }
}