import React, { Component } from 'react';
import Navbar from './components/navbar';
import { Route, withRouter } from 'react-router-dom';
import Customer from './components/customer';
import CustomersTable from './components/customers-table';
import { getCustomers } from './services/aw_service';

class App extends Component {
    state = {
        customers: [],
        customerView: false,
    }
    render() {
        var location = this.props.location.pathname;
        return (<div className="container-flex">
            <Navbar onCustomer={this.state.customerView}/>
            {/* <Route path="/list" component={Customers} /> */}
            <Route path="/list" render={(props) => (
                <CustomersTable {...props} customers={this.state.customers} />
            )}
            />
            <Route path="/customer/:id" component={Customer} />
        </div>
        );
    }

    componentDidMount() {
        const customers = getCustomers();
        this.setState({ customers });
    }

}

export default withRouter(App);