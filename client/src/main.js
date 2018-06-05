import React from 'react';
import { Gallery } from "./gallery";
import { Header } from "./header";
import { Footer } from "./footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from "./home";

export const Main = () => {
    return (
        <div className="main">
            <Header />
            <Router>
                <Switch>
                    <Route path='/gallery'  component={Gallery} />
                    <Route path='/'         component={Home} />
                </Switch>
            </Router>
            <Footer />
        </div>
    )
};