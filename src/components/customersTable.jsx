import React, { Component } from 'react';
import { GET_CUSTOMERS } from '../actions/types';
import { connect } from 'react-redux';
import { getCustomers } from '../actions/customersActions';

class CustomersTable extends Component {

    componentDidMount() {
        this.props.getCustomers();
        console.log(this.props.customers);
    }

    render() {
        return (<div className="container mt-3">
            <table className="table table-responsive-md table-hover">
                <thead className="bg-primary text-white">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>E-mail</th>
                        <th>Telephone</th>
                        <th>City ID</th>
                    </tr></thead>
                <tbody>
                    {this.props.customers.map((customer) => (
                        <tr key={customer.id} onClick={() => { console.log("Click"); }}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.surname}</td>
                            <td>{customer.email}</td>
                            <td>{customer.telephone}</td>
                            <td>{customer.cityid}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>);
    }

}

const mapStateToProps = (state) => {
    return {
        customers: state.customers.customers
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCustomers: () => {
            dispatch ({type: GET_CUSTOMERS});
        }
    };
 };

export default connect(mapStateToProps, mapDispatchToProps)(CustomersTable);