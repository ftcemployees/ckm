import React from 'react';
import { SearchComponent } from "./search";

export class Header extends React.Component {
    render () {
        let loginInfo = '';
        if (sessionStorage.getItem('name_first')) {
            loginInfo = <div className="contact-btn"><a href="/login">Log out from {sessionStorage.getItem('name_first')}</a></div>;
        } else {
            loginInfo = <div className="contact-btn"><a href="/login">Login</a></div>;
        }

        return (
            <div className="header">
                <a href="./"><img src={require("./img/logo.png")} className="logo" alt="Logo"/></a>
                <a href="./" className="header-logo">Copper King Mansion Historic Clothing</a>
                <div className="search-box">
                    <SearchComponent/>
                </div>
                {loginInfo}
                {/*<header className="top_header" >*/}
                    {/*<h1>C K M</h1>*/}
                    {/*<pre className="tab">P  H  O  T  O  G  R  A  P  H  Y</pre>*/}
                {/*</header>*/}
            </div>
        );
    }
}