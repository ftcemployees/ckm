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
            <div className="global-nav-container">
                <div className="ckm-logo-container">
                    CKM
                </div>
                <div className="global-nav-tools">
                    {/*<input type="text" placeholder="Search.."/>*/}
                    <SearchComponent/>
                    {loginInfo}
                </div>
                {/*<header className="top_header" >*/}
                    {/*<h1>C K M</h1>*/}
                    {/*<pre className="tab">P  H  O  T  O  G  R  A  P  H  Y</pre>*/}
                {/*</header>*/}
            </div>
        );
    }
}