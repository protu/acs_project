import React, { Component } from 'react';
import { getCustomerService } from '../services/local_service';
import { connect } from 'react-redux';
import { navCustomer, navMain } from '../actions/navActions';
import { currCustomer } from '../actions/customersActions'

class Customer extends Component {
     state = {
        customer: {}
    }
  
    componentDidMount() {
        this.props.navCustomer();
        const id = this.props.match.params.id;
        getCustomerService(id).then(response => {
            this.setState({ customer: response.data });
        });
    }

    componentWillUnmount() {
        this.props.navMain();
    }

    render() {
        const customer = this.state.customer;
        this.props.currCustomer(customer);
        return (<div className="mt-4 ml-4">
            <h3>Name: {customer.name + " " + customer.surname}</h3>
            <dl>
                <dt className="row col-sm-2">Email:</dt><dd className="col-sm-5">{customer.email}</dd>
                <dt className="row col-sm-2">Telephone:</dt><dd className="col-sm-5">{customer.telephone}</dd>
            </dl>
        </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        customer: state.customers.currCustomer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        navCustomer: () => dispatch(navCustomer()),
        navMain: () => dispatch(navMain()),
        currCustomer: (customer) => dispatch(currCustomer(customer))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
