import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './app';
import { BrowserRouter } from 'react-router-dom';

const startingPoint = (<BrowserRouter><App /></BrowserRouter>)
ReactDOM.render(startingPoint, document.getElementById("root"))