import React, { Component } from 'react';
import { getBills, currBill } from '../actions/billActions';
import { getSellers } from '../actions/supportActions';
import { connect } from 'react-redux';
import Pagination from './pagination';
import { paginate } from '../services/paginate';
import { compareValues } from '../services/compare';
import { leftJoin } from '../services/join';
import _ from 'lodash';

class BillsTable extends Component {
    state = {
        pageSize: 10,
        currentPage: 1,
    }

    componentDidMount() {
        this.props.getBills(this.props.customer.Id);
        this.props.getSellers();
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    }

    handlePageSizeChange = (size) => {
        this.setState({ pageSize: size });
        let maxPagesCount = Math.ceil(this.props.bills.length / size);
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
        var sellers = this.props.sellers.map(o => _(o)
            .omit('PermanentEmployee')
            .mapKeys((value, key) => { return (key !== 'Id') ? 'Seller' + key : key })
            .value()
        );
        var bills = leftJoin(this.props.bills, sellers, "SellerId", "Id");
        if (this.state.sortKey !== null) {
            bills.sort(compareValues(this.state.sortKey, this.state.sortAsc));
        }
        let billsCount = bills.length;
        let billsShown = paginate(bills, this.state.currentPage, this.state.pageSize)

        return (
            <div className="container mt-3">
                <table className="table table-responsive-md table-hover">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th onClick={() => this.handleTableSort("Date")}>Date</th>
                            <th onClick={() => this.handleTableSort("BillNumber")}>Bill Number</th>
                            <th onClick={() => this.handleTableSort("SellerName")}>Seller</th>
                            <th onClick={() => this.handleTableSort("CreditCardId")}>Credit Card Id</th>
                            <th onClick={() => this.handleTableSort("Comment")}>Comment</th>
                        </tr></thead>
                    <tbody>
                        {billsShown.map((bill) => (
                            <tr key={bill.Id} onClick={() => { this.handlePush(this.props, bill.Id) }}>
                                <td>{(new Date(bill.Date)).toLocaleDateString()}</td>
                                <td>{bill.BillNumber}</td>
                                <td>{bill.SellerName + " " + bill.SellerSurname}</td>
                                <td>{bill.CreditCardId}</td>
                                <td>{bill.Comment}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    pageSize={this.state.pageSize}
                    currentPage={this.state.currentPage}
                    itemsCount={billsCount}
                    onPageChange={this.handlePageChange}
                    onPageSizeChange={this.handlePageSizeChange}
                />
                <p>Total bills found: {billsCount}</p>
            </div>);
    }

    handlePush = (props, id) => {
        let bill = this.props.bills.filter(b => b.Id === Number(id))[0];
        props.currBill(bill);
        props.history.push(`/bill`);
    }
}

const mapStateToProps = (state) => {
    return {
        bills: state.bills.bills,
        customer: state.customers.current,
        sellers: state.support.sellers
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        getBills: (customerId) => dispatch(getBills(customerId)),
        currBill: (bill) => dispatch(currBill(bill)),
        getSellers: () => dispatch(getSellers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BillsTable);
