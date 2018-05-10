import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './login';
import { Main } from './main';



export class Ckm extends React.Component {
    render() {   
        return (
            <Router>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/' component={Main} />
                </Switch>
            </Router>
        )
    }
}