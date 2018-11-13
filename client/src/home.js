import React from 'react';

const eras =
    ['<-1880'
    ,'1890'
    ,'1900'
    ,'1910'
    ,'1920'
    ,'1930'
    ,'1940'
    ,'1950'
    ,'1960'
    ,'1970'
    ,'1980'
    ,'1990->'];

const categories =
    ['apparel'
    ,'headdress'
    ,'misc.'
    ,'footwear'
    ,'purses'
    ,'jewelry'
    ,'home décor'
    ,'religious'];

const genders =
    ['female'
    ,'male'
    ,'unisex'
    ,'other'];

export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    createEraButtons = (type,filter) => {
        return (
        <a key={filter + '-container'} href={`/gallery?${type}=${filter}`}>
            <div key={filter}>
                <div>{filter}</div>
            </div>
        </a>);
    }

    render () {
        return (
            <div className="home-page">
                <h1>Copper King Mansion</h1>
                <h2>Historic Fashion Collection</h2>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/slAZRhTiBdU" frameBorder="0"
                        allow="autoplay; encrypted-media" allowFullScreen/>

                <a href="./gallery"><h3>Enter The Gallery</h3></a>

                <h3>Eras</h3>
                <div className="eras">
                    {eras.map((era) => this.createEraButtons("era", era))}
                </div>

                <h3>Categories</h3>
                <div className="categories">
                    {categories.map((category) => this.createEraButtons("category", category))}
                </div>
            </div>
        );
    }
}