import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navCustomer, navMain } from '../actions/navActions';
import { currCustomer, getCustomerService } from '../actions/customersActions'
import BillsTable from './billsTable';
import { getBills } from '../actions/billActions';

class Customer extends Component {
     state = {
        customer: {}
    }
  
    componentDidMount() {
        this.props.navCustomer();
        // const id = this.props.match.params.id;
        // this.props.getBills(id);
        // getCustomerService(id).then(response => {
        //     this.setState({ customer: response.data });
        // });
        // this.props.getCustomer(id);

    }

    componentWillUnmount() {
        this.props.navMain();
    }

    render() {
        console.log(this.props.customers);
        const customer = this.props.customer;
        return (<div className="mt-4 ml-4">
            <h3>Name: {customer.Name + " " + customer.Surname}</h3>
            <dl>
                <dt className="row col-sm-2">Email:</dt><dd className="col-sm-5">{customer.Email}</dd>
                <dt className="row col-sm-2">Telephone:</dt><dd className="col-sm-5">{customer.Telephone}</dd>
            </dl>
        </div>

        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        customer: state.customers.current
    }
}

const mapDispatchToProps = dispatch => {
    return {
        navCustomer: () => dispatch(navCustomer()),
        navMain: () => dispatch(navMain()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
