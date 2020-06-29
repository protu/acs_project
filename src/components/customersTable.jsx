import React, { Component } from 'react';
import { getCustomers, currCustomer } from '../actions/customersActions';
import { getCities } from '../actions/supportActions';
import { connect } from 'react-redux';
import Pagination from './pagination';
import { paginate } from '../services/paginate';
import { compareValues } from '../services/compare';
import Searchbar from './searchbar';
import search from '../services/search';
import { leftJoin } from '../services/join';
import _ from 'lodash';


class CustomersTable extends Component {
    state = {
        pageSize: 10,
        currentPage: 1,
        filter: { search: "" }
    }

    componentDidMount() {
        this.props.getCustomers();
        this.props.getCities();
    }

    static getDerivedStateFromProps(props, current_state) {
        if (current_state.filter.search !== props.filter.search) {
            return {
                filter: props.filter,
                currentPage: 1
            }
        }
        return null
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
        var cities = this.props.cities.map(o => _(o)
            .omit('StateId')
            .mapKeys((value, key) => { return (key === 'Name') ? 'City' + key : key })
            .value()
        );
        var customers = leftJoin(this.props.customers, cities, "CityId", "Id");
        if (this.state.sortKey !== null) {
            customers.sort(compareValues(this.state.sortKey, this.state.sortAsc));
        }
        if (this.props.filter.search !== "" && this.props.filter.search !== undefined) {
            customers = search(customers, this.props.filter.search);
        }
        let customersCount = customers.length;
        let customersShown = paginate(customers, this.state.currentPage, this.state.pageSize)


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
                        <th onClick={() => this.handleTableSort("Id")}>ID</th>
                        <th onClick={() => this.handleTableSort("Iame")}>Name</th>
                        <th onClick={() => this.handleTableSort("Surname")}>Surname</th>
                        <th onClick={() => this.handleTableSort("Email")}>E-mail</th>
                        <th onClick={() => this.handleTableSort("Telephone")}>Telephone</th>
                        <th onClick={() => this.handleTableSort("CityName")}>City</th>
                    </tr></thead>
                <tbody>
                    {customersShown.map((customer) => (
                        <tr key={customer.Id} onClick={() => { this.handlePush(this.props, customer.Id) }}>
                            <td>{customer.Id}</td>
                            <td>{customer.Name}</td>
                            <td>{customer.Surname}</td>
                            <td>{customer.Email}</td>
                            <td>{customer.Telephone}</td>
                            <td>{customer.CityName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Total customers found: {customersCount}</p>
        </div>);
    }

    handlePush = (props, id) => {
        let customer = this.props.customers.filter(c => c.Id === Number(id))[0];
        props.currCustomer(customer);
        props.history.push(`/customer`);
    }

}

const mapStateToProps = (state) => {
    return {
        customers: state.customers.customers,
        filter: state.customers.filter,
        cities: state.support.cities
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCustomers: () => dispatch(getCustomers()),
        currCustomer: (customer) => dispatch(currCustomer(customer)),
        getCities: () => dispatch(getCities())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomersTable);