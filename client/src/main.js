import React from 'react';
import { Gallery } from "./gallery";
import { Header } from "./header";
import { Footer } from "./footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from "./home";

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            showFilter: false
        };
    }

    showFilter(val) {
        this.setState({showFilter: !this.state.showFilter});
        console.log(this.state.showFilter)
    }

    setSearch(search) {
        this.setState({
            search: search
        });
    }

    render() {
        return (
            <div className="main">
                <Header showFilter={() => this.showFilter()} setSort={(sort)=>this.setSort(sort)} setSearch={(search)=>this.setSearch(search)}/>
                <Router>
                    <Switch>
                        <Route path='/gallery' render={() => <Gallery search={this.state.search} showFilter={this.state.showFilter}/>}/>
                        <Route path='/' component={Home}/>
                    </Switch>
                </Router>
                <Footer/>
            </div>
        )
    }
}