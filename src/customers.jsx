import React, { Component } from 'react';
// import Navbar from './components/navbar';
// import SearchBar from './components/searchbar';
// import adventure from './adventure';
// import Customer from './components/customer';
import CustomersTable from './components/customers-table';
import { getCustomers } from './services/aw_service';


class Customers extends Component {
    state = {
        customers: [],
    }
    
    // onSearchSubmit = async (term) => {
    //     console.log(term);
    //     const response = await adventure.get("/aw/customer/" + term);
    //     console.log(response.data);
    //     this.setState({ customer: response.data });
    // }

    // getCustomersList = async () => {
    //     const response = await adventure.get("/aw/customers");
    //     console.log(await response.then);
    //     return await response.data;
    // }


    render() {
        return (<div>
            {/* <Navbar /> */}
            {/* <SearchBar onSubmit={this.onSearchSubmit} /> */}
            {/* <Customer customer={this.state.customers} /> */}
            <CustomersTable {...this.props} customers={this.state.customers} />
        </div>
        );
    }

    componentDidMount() {
        const customers = getCustomers();
        this.setState({customers});
    }
}

export default Customers;