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
        var city = this.props.cities.find(city => city.Id === customer.CityId);

        if (!city) {city = {Name: ""}};
        return (
            <div className="container">
                <div className="mt-4 ml-4">
                    <h3>Name: {customer.Name + " " + customer.Surname}</h3>
                    <dl>
                        <dt className="row col-sm-2">Email:</dt><dd className="col-sm-5">{customer.Email}</dd>
                        <dt className="row col-sm-2">Telephone:</dt><dd className="col-sm-5">{customer.Telephone}</dd>
                        <dt className="row col-sm-2">City:</dt><dd className="col-sm-5">{city.Name}</dd>
                    </dl>
                </div>
                {this.props.authenticated && <BillsTable {...this.props}/>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        customer: state.customers.current,
        authenticated: state.auth.isSignedIn,
        cities: state.support.cities
    }
}

const mapDispatchToProps = dispatch => {
    return {
        navCustomer: () => dispatch(navCustomer()),
        navMain: () => dispatch(navMain()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
