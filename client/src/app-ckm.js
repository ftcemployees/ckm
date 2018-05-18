import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './login';
import { Main } from './home';
import { NewUser } from './new_user';
import { Picture } from './picture';



export class Ckm extends React.Component {
    render() {   
        return (
            <Router>
                <Switch>
                    <Route path='/login'        component={Login} />
                    <Route path='/new_user'     component={NewUser} />
                    <Route path='/'             component={Main} />
                    <Route path='/:id'          component={Picture} />
                </Switch>
            </Router>
        )
    } 
}