import React, { Component } from 'react';
import { getCustomers } from '../actions';

class CustomersTable extends Component {

    componentDidMount() {
        
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
                        <tr key={customer.id} onClick={() => {this.handlePush(this.props, customer.id) }}>
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

    handlePush = (props, id) => {
        props.history.push(`/customer/${id}`);
    }

}

export default CustomersTable;