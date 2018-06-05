import React from 'react';
import { SearchComponent } from "./search";

export class Header extends React.Component {
    render () {
        let loginInfo = '';
        if (sessionStorage.getItem('name_first')) {
        // loginInfo = <div className="contact-btn"><a href="/login">Log out from {sessionStorage.getItem('name_first')}</a></div>;
        // loginInfo = <a href="/login">Log out from {sessionStorage.getItem('name_first')}</a>;
            loginInfo =
                <div className="dropdown">
                    <a href="./"><img src={require("./img/User-Profile.png")} className="logo-2" alt="Logo"/></a>
                    <div className="dropdown-content">
                        <a href="#">Upload</a>
                        <a href="/login">Log out from {sessionStorage.getItem('name_first')}</a>
                    </div>
                </div>;
        } else {
            // loginInfo = <div className="contact-btn"><a href="/login">Login</a></div>;
            loginInfo = <a href="./login"><img src={require("./img/User-Profile.png")} className="logo-2" alt="Logo"/></a>;
        }


        return (
            <div className="header">
                <a href="./"><img src={require("./img/Logo.png")} className="logo" alt="Logo"/></a>
                <a href="./" className="header-logo">CKM</a>
                <div className="search-box">
                    <SearchComponent/>
                </div>
                <button className="upload-button">+</button>
                {loginInfo}
            </div>
        );
    }
}