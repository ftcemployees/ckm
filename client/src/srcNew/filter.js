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
    ['Apparel'
    ,'Headdress'
    ,'Mics.'
    ,'Footwear'
    ,'Purses'
    ,'Jewelry'
    ,'Home Décor'
    ,'Religious'];

const genders =
    ['Female'
    ,'Male'
    ,'Unisex'
    ,'Other'];

const items =
    ['Item'
    ,'Jacket'
    ,'Capelet'
    ,'Dress'
    ,'Coat'
    ,'Shawl'
    ,'Jumpsuit'];

export class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: {
                era: [],
                category: [],
                gender: [],
                item: []
            }
        };

        // this.setSort = this.setSort.bind(this);
    }

    componentWillMount() {
        // (eras + categories + genders + items);
    }


    handleChange(column, e) {
        // current array of options
        let val = e.target.value;
        let index;

        // check if the check box is checked or unchecked
        if (e.target.checked) {
            // add the numerical value of the checkbox to options array
            column.push(val)
        } else {
            // or remove the value from the unchecked checkbox from the array
            index = column.indexOf(val);
            column.splice(index, 1);
        }

        this.props.setFilter(this.state.filters);
    }


    createCheckBoxes = (item, column) => (
        <label key={item}  className="container">{item}
            <input type="checkbox" value={item} onChange={(e)=>this.handleChange(column, e)}/>
            <span className="checkmark"></span>
        </label>
    )

    render() {
        return (
            <div  ref="filters" className="filter">
                <h2>Filter</h2>

                <h3>Era</h3>
                {eras.map((val) => this.createCheckBoxes(val, this.state.filters.era))}

                <h3>Category</h3>
                {categories.map((val) => this.createCheckBoxes(val, this.state.filters.category))}

                <h3>Gender</h3>
                {genders.map((val) => this.createCheckBoxes(val, this.state.filters.gender))}

                {/*<h3>Items</h3>*/}
                {/*{items.map((val) => this.createCheckBoxes(val, this.state.filters.item))}*/}
            </div>
        );
    }
}