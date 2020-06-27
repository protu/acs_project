import React, { Component } from 'react';
import { getCustomers } from '../actions/customersActions';
import { connect } from 'react-redux';
import Pagination from './pagination';
import { paginate } from '../services/paginate';

class CustomersTable extends Component {
    state = {
        pageSize: 10,
        currentPage: 1
    }

    componentDidMount() {
        this.props.getCustomers();
    }

    handlePageChange = (page) => {
        this.setState({currentPage: page});
    }

    handlePageSizeChange = (size) => {
        this.setState({pageSize: size});
    }

    render() {

        let customersCount = this.props.customers.length;
        let customers = paginate(this.props.customers, this.state.currentPage, this.state.pageSize);
 
        return (<div className="container mt-3">
            <Pagination
                pageSize={this.state.pageSize}
                currentPage={this.state.currentPage}
                itemsCount={customersCount}
                onPageChange={this.handlePageChange}
                onPageSizeChange = {this.handlePageSizeChange}
            />
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
                    {customers.map((customer) => (
                        <tr key={customer.id} onClick={() => { this.handlePush(this.props, customer.id) }}>
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

const mapStateToProps = (state) => {
    return {
        customers: state.customers.customers
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCustomers: () => dispatch(getCustomers()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomersTable);