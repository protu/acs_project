import React, { Component } from 'react';

class CustomersTable extends Component {

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
                        <tr key={customer.Id} onClick={() => {this.handlePush(this.props, customer.Id) }}>
                            <td>{customer.Id}</td>
                            <td>{customer.Name}</td>
                            <td>{customer.Surname}</td>
                            <td>{customer.Email}</td>
                            <td>{customer.Telephone}</td>
                            <td>{customer.CityId}</td>
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