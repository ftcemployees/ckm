import React from 'react';

export class Item extends React.Component {
    render () {
        return (
            <div className={"pic-"+this.props.item.id+" pic"} onClick={this.props.onClick}>
                <div className="text-wrapper">
                    <p className="description">{this.props.item.id}</p>
                </div>
            </div>
        );
    }
}