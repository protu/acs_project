import React, { Component } from 'react';
import Navbar from '../components/navbar';
import { Route, BrowserRouter } from 'react-router-dom';
import Customer from '../components/customer';
import CustomersTable from '../components/customersTable';
import AddCustomer from '../components/addCustomer';


class App extends Component {
    state = {
        customerView: false
    }
    render() {
        return (
            <div className="container-flex">
                <BrowserRouter>
                    <Navbar onCustomer={this.state.customerView} />
                    <Route path="/list" exact component={CustomersTable} />
                    <Route path="/customer/:id" exact component={Customer} />
                    <Route path="/new" exact component={AddCustomer} />
                </BrowserRouter>
            </div>
        );
    }

}

export default App;