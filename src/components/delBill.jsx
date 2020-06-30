import React, { Component } from 'react';
import { connect } from 'react-redux';
import { delBill } from '../actions/billActions';
import { NavLink } from 'react-router-dom';


class DelCustomer extends Component {
    render() {
        const bill = this.props.bill;
        if (Object.keys(bill).length === 0) {
            return (<div className="text-danger mt-5 ml-5">Please choose bill to delete</div>);
        }
        this.props.delCustomer(bill, this.props.auth.token);
        return (<div className="mt-5 ml-5">
            <div className="text-danger ">Deleted bill {bill.BillNumber}</div>
            <NavLink className="text-secondary" to='/customer'>back to custmer</NavLink>
        </div>);
    }
}

const mapStateToProps = state => {
    return ({
        bill: state.bills.current,
        auth: state.auth
    })
}

const mapDispatchToProps = dispatch => {
    return {
        delCustomer: (bill, token) => dispatch(delBill(bill, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DelCustomer);