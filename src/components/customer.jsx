import React, { Component } from 'react';
import { getCustomer } from '../services/local_service';


class Customer extends Component {
    state = {
        customer: {}
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        getCustomer(id).then(response => { this.setState({ customer: response }) });
    }

    render() {
        const customer = this.state.customer;
        return (<div className="mt-4 ml-4">
            <h3>Name: {customer.name + " " + customer.surname}</h3>
            <dl>
                <dt className="row col-sm-2">Email:</dt><dd className="col-sm-5">{customer.email}</dd>
                <dt className="row col-sm-2">Telephone:</dt><dd className="col-sm-5">{customer.telephone}</dd>
            </dl>
            <div><button className="btn btn-danger" onClick={() => { console.log("DEL click"); }}>Delete</button></div>
            <div><button className="btn btn-primary">Edit</button></div>
        </div>);
    }
}

export default Customer;
