import React from 'react';

export class Item extends React.Component {
    render () {
        return (
            <div className={this.props.name}>
                <div className="text-wrapper">
                    <p className="description">{this.props.desc}</p>
                </div>
            </div>
        );
    }
}