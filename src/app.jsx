import React, { Component } from 'react';
import Customers from './customers';
import Navbar from './components/navbar';
import { Route } from 'react-router-dom';
import Customer from './components/customer';

class App extends Component {
    render() {
        return (<div className="container-flex">
            <Navbar />
            <Route path="/list" component={Customers} />
            <Route path="/customer/:id" component={Customer} />
        </div>
        );
    }

}

export default App;