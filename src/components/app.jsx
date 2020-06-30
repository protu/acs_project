import React, { Component } from 'react';
import NavigationBar from './navbar';
import { Route, BrowserRouter } from 'react-router-dom';
import Customer from './customer';
import CustomersTable from './customersTable';
import AddCustomer from './addCustomer';
import EditCustomer from './editCustomer';
import DelCustomer from './delCustomer';
import AddBill from './addBill';
import Bill from './bill';
import Home from './homePage';
import { connect } from 'react-redux'



class App extends Component {

    render() {
        return (
            <div className="container-flex">
                <BrowserRouter>
                    <NavigationBar />
                    <Route path="/" exact component={Home} />
                    <Route path="/list" exact component={CustomersTable} />
                    <Route path="/customer" exact component={Customer} />
                    {this.props.authenticated && <Route path="/new" exact component={AddCustomer} />}
                    {this.props.authenticated && <Route path="/delete" exact component={DelCustomer} />}
                    {this.props.authenticated && <Route path="/edit" exact component={EditCustomer} />}
                    {this.props.authenticated && <Route path="/newbill" exact component={AddBill} />}
                    {this.props.authenticated && <Route path="/bill" exact component={Bill} />}
                </BrowserRouter>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.isSignedIn
    }
};

export default connect(mapStateToProps)(App);