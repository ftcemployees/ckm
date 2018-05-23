import React from 'react';
import { Gallery } from "./gallery";
import { Header } from "./header";
import { Footer } from "./footer";

export const Main = () => {
    return (
        <div>
            <div className="home_page">
                <Header />
                <Gallery />
                <Footer />
            </div>
        </div>

    )
};