import React from 'react';

export class Header extends React.Component {
    render () {
        let loginInfo = '';
        if (sessionStorage.getItem('name_first')) {
            loginInfo = <div className="contact-btn"><a href="/login">Log out from {sessionStorage.getItem('name_first')}</a></div>;
        } else {
            loginInfo = <div className="contact-btn"><a href="/login">Login</a></div>;
        }

        return (
            <div>{loginInfo}</div>
        );
    }
}