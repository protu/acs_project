import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/app';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

const startingPoint = (
    <Provider store={store}>
        <App />
    </Provider>)

ReactDOM.render(startingPoint, document.getElementById("root"))