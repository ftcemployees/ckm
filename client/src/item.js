import React from 'react';

export class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const size = this.props.size;
        const styles = {
            container: {
                width: `${size}px`,
                height: `${size}px`
            }
        };

        return (
            <div style={styles.container} className={"pic-"+this.props.item.id+" pic"} onClick={this.props.onClick}>
                <div className="text-wrapper">
                    <p style={styles.container} className="description">{this.props.item.id}</p>
                </div>
            </div>
        );
    }
}