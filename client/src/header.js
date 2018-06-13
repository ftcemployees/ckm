import React from 'react';
import { SearchComponent } from "./search";

export class Header extends React.Component {

    handleSortChange(event) {
        let value = event.target.value;
        this.props.setSort(value);
    }

    render () {
        let loginInfo = '';
        if (sessionStorage.getItem('name_first')) {
        // loginInfo = <div className="contact-btn"><a href="/login">Log out from {sessionStorage.getItem('name_first')}</a></div>;
        // loginInfo = <a href="/login">Log out from {sessionStorage.getItem('name_first')}</a>;
            loginInfo =
                <div className="dropdown">
                    <a href="./"><img src={require("./img/User-Profile.png")} className="logo-2" alt="Logo"/></a>
                    <div className="dropdown-content">
                        <a href="/">Upload</a>
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
                <span className="filter-button">&#9776;</span>
                <a href="./" className="header-logo">CKM</a>
                <div className="search-box">
                    <div className="select-style">
                        <select onChange={(e) => this.handleSortChange(e)}>
                            <option value="All">All</option>
                            <option value="1890">1890</option>
                            <option value="1900">1900</option>
                            <option value="1910">1910</option>
                            <option value="1920">1920</option>
                            <option value="1930">1930</option>
                            <option value="1940">1940</option>
                            <option value="1950">1950</option>
                            <option value="1960">1960</option>
                            <option value="1970">1970</option>
                        </select>
                    </div>
                    <SearchComponent setSearch={(search) => this.props.setSearch(search)}/>
                </div>
                <button className="upload-button">+</button>
                {loginInfo}
            </div>
        );
    }
}