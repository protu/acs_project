import React, { Component } from 'react';
import { getBills } from '../actions/billActions';
import { connect } from 'react-redux';
import Pagination from './pagination';
import { paginate } from '../services/paginate';
import { compareValues } from '../services/compare';
import Searchbar from './searchbar';
import search from '../services/search';

class BillsTable extends Component {
    state = {
        pageSize: 10,
        currentPage: 1,
        filter: {search: ""}
    }

    componentDidMount() {
        this.props.getCustomers();
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
        var bills = this.props.bills;
        if (this.state.sortKey !== null) {
            bills.sort(compareValues(this.state.sortKey, this.state.sortAsc));
        }
        if (this.props.filter.search !== "" && this.props.filter.search !== undefined) {
            bills = search(this.props.bills, this.props.filter.search);
        }
        let billsCount = bills.length;
        let billsShown = paginate(bills, this.state.currentPage, this.state.pageSize)
        

        return (<div className="container mt-3">
            <Searchbar />
            <Pagination
                pageSize={this.state.pageSize}
                currentPage={this.state.currentPage}
                itemsCount={billsCount}
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
                        <th onClick={() => this.handleTableSort("CityId")}>City ID</th>
                    </tr></thead>
                <tbody>
                    {billsShown.map((bill) => (
                        <tr key={bill.Id} onClick={() => { this.handlePush(this.props, bill.Id) }}>
                            <td>{bill.Id}</td>
                            <td>{bill.Name}</td>
                            <td>{bill.Surname}</td>
                            <td>{bill.Email}</td>
                            <td>{bill.Telephone}</td>
                            <td>{bill.CityId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Total bills found: {billsCount}</p>
        </div>);
    }

    handlePush = (props, id) => {
        props.history.push(`/bill/${id}`);
    }

}

const mapStateToProps = (state) => {
    return {
        bills: state.bills.bills,
        filter: state.bills.filter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBills: () => dispatch(getBills()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BillsTable);
