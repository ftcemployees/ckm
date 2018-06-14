import React from 'react';
import { SearchComponent } from "./search";
import SearchIcon from 'react-icons/lib/md/search';
import UserIcon from 'react-icons/lib/md/person';
import SettingsIcon from 'react-icons/lib/md/settings';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spin: 0
        };
    }

    render () {
        let loginInfo = '';
        if (!sessionStorage.getItem('name_first')) {
            loginInfo =
                <div className="dropdown" onMouseEnter={() => this.setState({spin: 1})} onMouseLeave={() => this.setState({spin: 2})}>
                    <SettingsIcon className={`settings-icon${this.state.spin ? (this.state.spin === 1 ? ' spin-right' : ' spin-left') : ''}`}/>
                    <div className="dropdown-content">
                        <a href="/">Upload</a>
                        <a href="/login">Log Out</a>
                    </div>
                </div>;
        } else {
            loginInfo =  <UserIcon style={{ color: '#eee', fontSize: '45px', padding: '9px 14px 0 4px', textDecoration: 'none'}}/> // preserveAspectRatio="xMidYMid meet" height="1em" width="2.8125em"
        }


        return (
            <div className="header">
                <a href="./" className="header-logo">CKM</a>
                <div className="search-box">
                    <SearchIcon style={{position: 'absolute', right: '0', color: '#eee', fontSize: '42px', padding: '11px 14px'}}/>
                    <SearchComponent setSearch={(search) => this.props.setSearch(search)}/>
                </div>
                <button className="upload-button">+</button>
                {loginInfo}
            </div>
        );
    }
}