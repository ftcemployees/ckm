import React from 'react';

const eras =
    [1880
    ,1890
    ,1900
    ,1910
    ,1920
    ,1930
    ,1940
    ,1950
    ,1960
    ,1970];

const categories =
    ['Apparel'
    ,'Jewelry'
    ,'Headdress'
    ,'Footwear'];

const genders =
    ['Female'
    ,'Male'
    ,'Child'
    ,'Unisex'];

const items =
    ['Item'
    ,'Jacket'
    ,'Capelet'
    ,'Dress'
    ,'Coat'
    ,'Shawl'
    ,'Jumpsuit'];

export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    createEraButtons = (era) => {
        return (
        <div key={era}>
            <div>{era}</div>
        </div>);
    }

    render () {
        return (
            <div className="home-page">
                <h1>Copper King Mansion</h1>
                <h2>Historic Fashion Collection</h2>
                {/*<div className="home-page-image">*/}
                    {/*<img src={require("./img/mansion.jpg")} alt="mansion"/>*/}
                {/*</div>*/}


                <iframe width="560" height="315" src="https://www.youtube.com/embed/slAZRhTiBdU" frameBorder="0"
                        allow="autoplay; encrypted-media" allowFullScreen/>
                <a href="./gallery"><h3>Eras</h3></a>
                <div className="eras">
                    {eras.map(this.createEraButtons)}
                </div>

                <a href="./gallery"><h3>Categories</h3></a>
                <div className="eras">
                    {categories.map(this.createEraButtons)}
                </div>

                <a href="./gallery"><h3>Genders</h3></a>
                <div className="eras">
                    {genders.map(this.createEraButtons)}
                </div>

                <a href="./gallery"><h3>Items</h3></a>
                <div className="eras">
                    {items.map(this.createEraButtons)}
                </div>
            </div>
        );
    }
}