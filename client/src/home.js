import React from 'react';

export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="home-page">
                <h1>Copper King Mansion</h1>
                <h2>Historic Fashion Collection</h2>
                <div className="home-page-image">
                    <img src={require("./img/mansion.jpg")} alt="mansion"/>
                </div>
                <a href="./gallery"><h3>Gallery</h3></a>
            </div>
        );
    }
}