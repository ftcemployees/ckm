import React from 'react';
const queryString = require('query-string');

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
    }

    // componentWillMount() {
    //     let query = queryString.parse(this.props.location.search);
    //     Object.keys(query).map((filters) => (query[filters] = query[filters].split(',')));
    //
    //     this.setState({filters: query});
    // }

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

        const filters = this.state.filters;

        const query = Object.keys(filters).map((column) =>
            filters[column].length && `${column}=` + filters[column]
                .map((filter) => filter)
                .filter(Boolean).join(','))
            .filter(Boolean).join('&');

        this.props.history.push('/gallery?' + query);
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
            </div>
        );
    }
}