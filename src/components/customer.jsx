import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navCustomer, navMain } from '../actions/navActions';
import BillsTable from './billsTable';

class Customer extends Component {

    componentDidMount() {
        this.props.navCustomer();
    }

    componentWillUnmount() {
        this.props.navMain();
    }

    render() {
        const customer = this.props.customer;
        return (
            <div>
                <div className="mt-4 ml-4">
                    <h3>Name: {customer.Name + " " + customer.Surname}</h3>
                    <dl>
                        <dt className="row col-sm-2">Email:</dt><dd className="col-sm-5">{customer.Email}</dd>
                        <dt className="row col-sm-2">Telephone:</dt><dd className="col-sm-5">{customer.Telephone}</dd>
                        <dt className="row col-sm-2">City Id:</dt><dd className="col-sm-5">{customer.CityId}</dd>
                    </dl>
                </div>
                {this.props.authenticated && <BillsTable />}
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        customer: state.customers.current,
        authenticated: state.auth.isSignedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        navCustomer: () => dispatch(navCustomer()),
        navMain: () => dispatch(navMain()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
