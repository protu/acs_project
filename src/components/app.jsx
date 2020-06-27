import React, { Component } from 'react';
import Navbar from './navbar';
import { Route, BrowserRouter } from 'react-router-dom';
import Customer from './customer';
import CustomersTable from './customersTable';
import AddCustomer from './addCustomer';
import EditCustomer from './editCustomer';
import DelCustomer from './delCustomer';
import Home from './homePage';


class App extends Component {
    
    render() {
        return (
            <div className="container-flex">
                <BrowserRouter>
                    <Navbar/>
                    <Route path="/" exact component={Home} />
                    <Route path="/list" exact component={CustomersTable} />
                    <Route path="/customer/:id" exact component={Customer} />
                    <Route path="/new" exact component={AddCustomer} />
                    <Route path="/delete" exact component={DelCustomer} />
                    <Route path="/edit" exact component={EditCustomer} />
                </BrowserRouter>
            </div>
        );
    }

}

export default App;