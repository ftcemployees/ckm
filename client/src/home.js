import React from 'react';
import { Gallery } from "./gallery";
import { Header } from "./header";
import { Footer } from "./footer";

export const Main = () => {
    return (
        <div>
            <div className="home_page">
                <Header />
                <header className="top_header" >
                    <h1>C K M</h1>
                    <pre className="tab">P  H  O  T  O  G  R  A  P  H  Y</pre>
                </header>
                <nav className="top_menu">
                    {/*<ul>*/}
                        {/*<li>HOME</li>*/}
                        {/*<li>GALLERY</li>*/}
                        {/*<li>PICTURE</li>*/}
                    {/*</ul>*/}
                    <input type="text" placeholder="Search.."/>
                </nav>
                <Gallery />
                <Footer />
            </div>
        </div>

    )
}