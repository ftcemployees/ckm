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
            filters: {
                eras: [],
                categories: [],
                genders: [],
                items: []
            }
        };

        // this.setSort = this.setSort.bind(this);
    }

    componentWillMount() {
        // (eras + categories + genders + items);
    }


    handleChange(category, e) {
        // current array of options
        let val = e.target.value;
        let index;

        // check if the check box is checked or unchecked
        if (e.target.checked) {
            // add the numerical value of the checkbox to options array
            category.push(val)
        } else {
            // or remove the value from the unchecked checkbox from the array
            index = category.indexOf(val);
            category.splice(index, 1);
        }

        this.props.setFilter(this.state.filters);
    }


    createCheckBoxes = (item, category) => (
        <label key={item}  className="container">{item}
            <input type="checkbox" value={item} onChange={(e)=>this.handleChange(category, e)}/>
            <span className="checkmark"></span>
        </label>
    )

    render() {
        return (
          <div className="filter">
              <h1>Filter</h1>

              <h2>Era</h2>
              {eras.map((val) => this.createCheckBoxes(val, this.state.filters.eras))}
              {/*{eras.map((item) =>*/}
                  {/*<label key={item}  className="container">{item}*/}
                      {/*<input type="checkbox" value={item} onChange={(e)=>this.handleChange(this.state.filters.eras, e)}/>*/}
                      {/*<span className="checkmark"></span>*/}
                  {/*</label>)}*/}

              <h2>Category</h2>
              {categories.map((val) => this.createCheckBoxes(val, this.state.filters.categories))}

              <h2>Gender</h2>
              {genders.map((val) => this.createCheckBoxes(val, this.state.filters.genders))}

              <h2>Items</h2>
              {items.map((val) => this.createCheckBoxes(val, this.state.filters.items))}
          </div>
        );
    }
}