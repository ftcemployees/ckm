import React from 'react';
import ReactDOM from 'react-dom';
import { Ckm } from './srcNew/app-ckm';
// import './css/main.css';
import './css/main2.css';
import WebFont from 'webfontloader';

ReactDOM.render(<Ckm />, document.getElementById('root'));

WebFont.load({
    google: {
        families: ['Titillium Web:300,400,700', 'sans-serif']
    }
});