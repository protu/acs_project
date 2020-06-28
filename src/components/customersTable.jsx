import React, { Component } from 'react';
import { getCustomers } from '../actions/customersActions';
import { connect } from 'react-redux';
import Pagination from './pagination';
import { paginate } from '../services/paginate';
import { compareValues } from '../services/compare';
import Searchbar from './searchbar';
import search from '../services/search';

class CustomersTable extends Component {
    state = {
        pageSize: 10,
        currentPage: 1,
    }

    componentDidMount() {
        this.props.getCustomers();
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    }

    handlePageSizeChange = (size) => {
        this.setState({ pageSize: size });
        let maxPagesCount = Math.ceil(this.props.customers.length / size);
        if (this.state.currentPage > maxPagesCount) {
            this.setState({ currentPage: maxPagesCount });
        }
    }

    handleTableSort = (sortKey, sortAsc = true) => {
        if (sortKey === this.state.sortKey) {
            sortAsc = !this.state.sortAsc;
        }
        this.setState({ sortKey, sortAsc });
    }

    render() {
        var customers = this.props.customers;
        if (this.props.filter !== "" && this.props.filter !== undefined) {
            customers = search(this.props.customers, this.props.filter);
        }
        let customersCount = customers.length;
        let customersShown = paginate(customers, this.state.currentPage, this.state.pageSize)
        if (this.state.sortKey !== null) {
            customersShown.sort(compareValues(this.state.sortKey, this.state.sortAsc));
        }

        return (<div className="container mt-3">
            <Searchbar />
            <Pagination
                pageSize={this.state.pageSize}
                currentPage={this.state.currentPage}
                itemsCount={customersCount}
                onPageChange={this.handlePageChange}
                onPageSizeChange={this.handlePageSizeChange}
            />
            <table className="table table-responsive-md table-hover">
                <thead className="bg-primary text-white">
                    <tr>
                        <th onClick={() => this.handleTableSort("id")}>ID</th>
                        <th onClick={() => this.handleTableSort("name")}>Name</th>
                        <th onClick={() => this.handleTableSort("surname")}>Surname</th>
                        <th onClick={() => this.handleTableSort("email")}>E-mail</th>
                        <th onClick={() => this.handleTableSort("telephone")}>Telephone</th>
                        <th onClick={() => this.handleTableSort("cityid")}>City ID</th>
                    </tr></thead>
                <tbody>
                    {customersShown.map((customer) => (
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
        customers: state.customers.customers,
        filter: state.customers.filter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCustomers: () => dispatch(getCustomers()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomersTable);