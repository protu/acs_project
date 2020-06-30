import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navBill, navMain } from '../actions/navActions';
import { NavLink } from 'react-router-dom';
import ItemsTable from './itemsTable';

class Bill extends Component {

    componentDidMount() {
        this.props.navBill();
    }

    componentWillUnmount() {
        this.props.navMain();
    }

    render() {
        const customer = this.props.customer;
        var city = this.props.cities.find(city => city.Id === customer.CityId);
        if (!city) { city = { Name: "" } };

        const bill = this.props.bill;
        var seller = this.props.sellers.find(seller => seller.Id === bill.SellerId);
        if (!seller) { seller = { Name: "", Surname: "" } };
        return (
            <React.Fragment>
                {this.props.authenticated &&
                    <div className="container">
                        <div className="row ml-2 mt-4">
                            <div className="col-sm-6">
                                <h3><NavLink to="/customer">Customer:</NavLink></h3>
                                <dl className="row">
                                    <dt className="col-sm-3">Name:</dt><dd className="col-sm-9 font-weight-bold">{customer.Name + " " + customer.Surname}</dd>
                                    <dt className="col-sm-3">Email:</dt><dd className="col-sm-9">{customer.Email}</dd>
                                    <dt className="col-sm-3">Telephone:</dt><dd className="col-sm-9">{customer.Telephone}</dd>
                                    <dt className="col-sm-3">City:</dt><dd className="col-sm-9">{city.Name}</dd>
                                </dl>
                            </div>

                            <div className="col-sm-6">
                                <h3>Seller:</h3>
                                <dl className="row">
                                    <dt className="col-sm-3">Name:</dt><dd className="col-sm-9 font-weight-bold">{seller.Name + " " + seller.Surname}</dd>
                                    <dt className="col-sm-3">Credit card Id:</dt><dd className="col-sm-9">{bill.CreditCardId}</dd>
                                    <dt className="col-sm-3">Date:</dt><dd className="col-sm-9">{(new Date(bill.Date)).toLocaleDateString()}</dd>
                                    <dt className="col-sm-3">Comment:</dt><dd className="col-sm-9">{bill.Comment}</dd>
                                </dl>
                            </div>
                        </div>
                        <ItemsTable />
                    </div>
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        customer: state.customers.current,
        bill: state.bills.current,
        authenticated: state.auth.isSignedIn,
        cities: state.support.cities,
        sellers: state.support.sellers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        navBill: () => dispatch(navBill()),
        navMain: () => dispatch(navMain()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bill);
