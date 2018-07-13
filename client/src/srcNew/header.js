import React from 'react';
import { SearchComponent } from "./search";
import SearchIcon from 'react-icons/lib/md/search';
import UserIcon from 'react-icons/lib/md/person';
import SettingsIcon from 'react-icons/lib/md/settings';
import HamburgerIcon from 'react-icons/lib/md/dehaze';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spin: 0,
            display: 'none',
        };
    }

    show() {
        this.setState({display: 'block'})
    }

    hide(event) {
        this.setState({display: 'none'})
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
                {/*<div style={{display: this.state.display}} className="fullscreen-search" >*/}
                    {/*<SearchComponent setSearch={(search) => this.props.setSearch(search)}/>*/}
                    {/*<button onClick={() => console.log('clicked')} className="search-modal-clear">X</button>*/}
                    {/*<div style={{width: '100%', height: '100%', zIndex: '5'}} onClick={() => this.hide()}></div>*/}
                {/*</div>*/}
                {/*<HamburgerIcon onClick={() => this.props.showFilter()} className="filter-button"/>*/}
                <a href="./" className="header-logo">CKM</a>
                <div className="search-box">
                    <SearchIcon onClick={() => this.show()} style={{position: 'absolute', right: '0', color: '#eee', fontSize: '42px', margin: '11px 14px'}}/>
                    <SearchComponent setSearch={(search) => this.props.setSearch(search)}/>
                </div>
                {loginInfo}
            </div>
        );
    }
}