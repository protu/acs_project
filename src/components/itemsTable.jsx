import React, { Component } from 'react';
import { getItems } from '../actions/itemActions';
import { connect } from 'react-redux';
import Pagination from './pagination';
import { paginate } from '../services/paginate';
import { compareValues } from '../services/compare';

class ItemsTable extends Component {
    state = {
        pageSize: 10,
        currentPage: 1,
    }

    componentDidMount() {
        this.props.getItems(this.props.bill.Id);
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    }

    handlePageSizeChange = (size) => {
        this.setState({ pageSize: size });
        let maxPagesCount = Math.ceil(this.props.items.length / size);
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
        var items = this.props.items;
        console.log(items);
        if (this.state.sortKey !== null) {
            items.sort(compareValues(this.state.sortKey, this.state.sortAsc));
        }
        let itemsCount = items.length;
        let itemsShown = paginate(items, this.state.currentPage, this.state.pageSize)

        return (
            <div className="container mt-3">
                <table className="table table-responsive-md table-hover">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th onClick={() => this.handleTableSort("Product.Name")}>Product Name</th>
                            <th onClick={() => this.handleTableSort("PricePerPiece")}>Price</th>
                            <th onClick={() => this.handleTableSort("Quantity")}>Quantity</th>
                            <th onClick={() => this.handleTableSort("TotalPrice")}>Total Price</th>
                        </tr></thead>
                    <tbody>
                        {itemsShown.map((item) => (
                            <tr key={item.Id}>
                                <td>{item.Product.Name}</td>
                                <td>{Math.round(item.PricePerPiece*100)/100}</td>
                                <td>{item.Quantity}</td>
                                <td>{Math.round(item.TotalPrice*100)/100}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    pageSize={this.state.pageSize}
                    currentPage={this.state.currentPage}
                    itemsCount={itemsCount}
                    onPageChange={this.handlePageChange}
                    onPageSizeChange={this.handlePageSizeChange}
                />
                <p>Total bills found: {itemsCount}</p>
            </div>);
    }

}

const mapStateToProps = (state) => {
    return {
        bill: state.bills.current,
        items: state.items.items
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        getItems: (billId) => dispatch(getItems(billId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsTable);
