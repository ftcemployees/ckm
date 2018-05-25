import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './login';
import { Main } from './home';
import { NewUser } from './new_user';
import { NewItem} from "./new-item";

export class Ckm extends React.Component {
    render() {   
        return (
            <Router>
                <Switch>
                    <Route path='/new-item'  component={NewItem} />
                    <Route path='/login'    component={Login} />
                    <Route path='/new-user' component={NewUser} />
                    <Route path='/'         component={Main} />
                </Switch>
            </Router>
        )
    } 
}