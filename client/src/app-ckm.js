import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './login';
import { Main } from './main';
import { Home } from "./home";
import { NewUser } from './new_user';

export class Ckm extends React.Component {
    render() {   
        return (
            <Router>
                <Switch>
                    <Route path='/login'    component={Login} />
                    <Route path='/new_user' component={NewUser} />
                    <Route path='/gallery'  component={Main} />
                    <Route path='/'         component={Home} />
                </Switch>
            </Router>
        )
    } 
}