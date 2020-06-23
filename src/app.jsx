import React, { Component } from 'react';
import Navbar from './components/navbar';
import { Route, withRouter } from 'react-router-dom';
import Customer from './components/customer';
import CustomersTable from './components/customers-table';
import { getCustomers, delCustomer } from './services/aw_service';

class App extends Component {
    state = {
        customers: [],
        customerView: false,
    }
    render() {
        var location = this.props.location.pathname;
        return (
        <div className="container-flex">
            <Navbar onCustomer={this.state.customerView} />
            <Route path="/list" render={(props) => (
                <CustomersTable {...props} customers={this.state.customers} />
            )}
            />
            <Route path="/customer/:id" render={(props) => (
                <Customer {...props} handlerDelete={this.handlerDelete} />
            )} />
        </div>
        );
    }

    handlerDelete = (id) => {
        // const customers = this.state.customers.filter(customer => customer.Id !== Number(id));
        const customers = delCustomer(id);
        this.setState({ customers });
        console.log(customers);
        this.props.history.push('/list');
    }

    componentDidMount() {
        const customers = getCustomers();
        this.setState({ customers });
    }

}

export default withRouter(App);