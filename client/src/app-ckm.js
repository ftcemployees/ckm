import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './login';
import { Gallery } from "./gallery";
import { Item } from "./item";
import { Header } from "./header";
import { Footer } from "./footer";
import { Home } from "./home";
import { NewUser } from './new_user';

export class Ckm extends React.Component {
    render() {   
        return (
            <div className="main">
                <Header/>
                    <Router>
                        <Switch>
                            <Route path='/login'            component={Login} />
                            <Route path='/new_user'         component={NewUser} />
                            <Route path='/gallery/:item_id' component={Item} />
                            <Route path='/gallery'          component={Gallery}/>
                            <Route path='/'                 component={Home}/>
                        </Switch>
                    </Router>
                <Footer/>
            </div>
        )
    } 
}