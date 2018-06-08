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

export class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eras: [],
            categories: [],
            genders: [],
            items: [],
        };
    }

    componentWillMount() {
        (eras + categories + genders + items);
    }

    // handleChange (item, e) {
    //     if (e.target.checked) {
    //         console.log(item.item);
    //         this.props.addFilter(item.item);
    //     }
    // }

    handleChange(item, e) {
        // current array of options
        let val = item;
        console.log(val);
        const options = this.state.options;
        let index;

        // check if the check box is checked or unchecked
        if (e.target.checked) {
            // add the numerical value of the checkbox to options array
            options.push(val);
        } else {
            // or remove the value from the unchecked checkbox from the array
            index = options.indexOf(val);
            options.splice(index, 1);
        }

        // update the state with the new array of options
        this.setState({ options: options });
        console.log(this.state.options);
    }


    createCheckBoxes = (item) => (
        <label key={item}  className="container">{item}
            <input type="checkbox" onChange={(e)=>this.handleChange(item, e)}/>
            <span className="checkmark"></span>
        </label>
    )

    render() {
        return (
          <div className="filter">
              <h1>Filter</h1>

              <h2>Era</h2>
              {eras.map(this.createCheckBoxes)}

              <h2>Category</h2>
              {categories.map(this.createCheckBoxes)}

              <h2>Gender</h2>
              {genders.map(this.createCheckBoxes)}

              <h2>Items</h2>
              {items.map(this.createCheckBoxes)}
          </div>
        );
    }
}