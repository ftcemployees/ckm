import React from 'react';

export class Item extends React.Component {
    render () {
        return (
            <div className={this.props.id}>
                <div className="text-wrapper">
                    <p className="description">{this.props.description}</p>
                </div>
            </div>
        );
    }
}