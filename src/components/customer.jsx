import React, { Component } from 'react';
import { getCustomer } from '../services/aw_service';


class Customer extends Component {

    render() {
        const id = this.props.match.params.id;
        const customer = getCustomer(id);
        console.log(customer);
        return (<div className="mt-4 ml-4">
            <h3>Name: {customer.Name + " " + customer.Surname}</h3>
            <dl>
                <dt className="row col-sm-2">Email:</dt><dd className="col-sm-5">{customer.Email}</dd>
                <dt className="row col-sm-2">Telephone:</dt><dd className="col-sm-5">{customer.Telephone}</dd>
            </dl>
        </div>);
    }
}

export default Customer;
