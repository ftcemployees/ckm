import React from 'react';
import ReactDOM from 'react-dom';
import { Ckm } from './app-ckm';
import './css/index.css';
import WebFont from 'webfontloader';

ReactDOM.render(<Ckm />, document.getElementById('root'));

WebFont.load({
    google: {
        families: ['Titillium Web:300,400,700', 'sans-serif']
    }
});