import React from 'react';
import ReactDOM from 'react-dom';

import './style/main.scss';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css';

import App from './components/App';

ReactDOM.render(
    <App />, document.querySelector('#root')
);