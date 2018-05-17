import React from 'react';
import { Item } from './item';
import { Gallery } from "./gallery";
import Autosuggest from 'react-autosuggest';
import axios from "axios";

export const Main = () => {
    let loginInfo = '';
    if (sessionStorage.getItem('name_first')) {
        loginInfo = <div className="contact-btn"><a href="/login">Log out from {sessionStorage.getItem('name_first')}</a></div>;
    } else {
        loginInfo = <div className="contact-btn"><a href="/login">Login</a></div>;
    }

    return (
        <div>
            {loginInfo}
            <div className="home_page">
                <header className="top_header" >
                    <h1>C K M</h1>
                    <pre className="tab">P  H  O  T  O  G  R  A  P  H  Y</pre>
                </header>
                <nav className="top_menu">
                    <input type="text" placeholder="Search.."/>
                </nav>
                <Gallery />
                <footer className="the_footer">
                    © Copyright Lu Yuan Ting 2018
                </footer>
            </div>
        </div>

    )
}