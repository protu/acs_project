import React, { Component } from 'react';
import { getBills, currBill } from '../actions/billActions';
import { connect } from 'react-redux';
import Pagination from './pagination';
import { paginate } from '../services/paginate';
import { compareValues } from '../services/compare';

class BillsTable extends Component {
    state = {
        pageSize: 10,
        currentPage: 1,
    }

    componentDidMount() {
        this.props.getBills(this.props.customer.Id);
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
        let billsCount = bills.length;
        let billsShown = paginate(bills, this.state.currentPage, this.state.pageSize)
        

        return (<div className="container mt-3">
            
            <table className="table table-responsive-md table-hover">
                <thead className="bg-primary text-white">
                    <tr>
                        <th onClick={() => this.handleTableSort("Date")}>Date</th>
                        <th onClick={() => this.handleTableSort("SellerId")}>SellerId</th>
                        <th onClick={() => this.handleTableSort("CreditCardId")}>CreditCardId</th>
                        <th onClick={() => this.handleTableSort("Comment")}>Comment</th>
                    </tr></thead>
                <tbody>
                    {billsShown.map((bill) => (
                        <tr key={bill.BillNumber} onClick={() => { this.handlePush(this.props) }}>
                            <td>{bill.Date}</td>
                            <td>{bill.SellerId}</td>
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

    handlePush = (props) => {
        props.history.push(`/bill`);
    }

}

const mapStateToProps = (state) => {
    return {
        bills: state.bill.bills,
        customer: state.customers.current,
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        getBills: (customerId) => dispatch(getBills(customerId)),
        currBill: (billNumber) => dispatch(currBill(billNumber))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BillsTable);
