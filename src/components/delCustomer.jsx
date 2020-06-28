import React, { Component } from 'react';
import { connect } from 'react-redux';
import { delCustomer } from '../actions/customersActions';


class DelCustomer extends Component {
    state = {}
    render() {
        const customer = this.props.customer;
        if (Object.keys(customer).length === 0) {
            return (<div className="text-danger mt-5 ml-5">Please choose customer to delete</div>);
        }
        this.props.delCustomer(customer);
        return (<div className="text-danger mt-5 ml-5">Deleted customer {customer.Name} {customer.Surname}</div>);
    }
}

const mapStateToProps = state => {
    return ({
        customer: state.customers.current
    })
}

const mapDispatchToProps = dispatch => {
    return {
        delCustomer: (customer) => dispatch(delCustomer(customer))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DelCustomer);