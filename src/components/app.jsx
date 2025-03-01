import React, { Component } from 'react';
import NavigationBar from './navbar';
import { Route, BrowserRouter } from 'react-router-dom';
import Customer from './customer';
import CustomersTable from './customersTable';
import AddCustomer from './addCustomer';
import EditCustomer from './editCustomer';
import DelCustomer from './delCustomer';
import AddBill from './addBill';
import AddItem from './addItem';
import DelBill from './delBill';
import Bill from './bill';
import Home from './homePage';
import Register from './register';
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
                    <Route path="/register" exact component={Register} />
                    {this.props.authenticated && <Route path="/new" exact component={AddCustomer} />}
                    {this.props.authenticated && <Route path="/delete" exact component={DelCustomer} />}
                    {this.props.authenticated && <Route path="/edit" exact component={EditCustomer} />}
                    {this.props.authenticated && <Route path="/newbill" exact component={AddBill} />}
                    {this.props.authenticated && <Route path="/bill" exact component={Bill} />}
                    {this.props.authenticated && <Route path="/deletebill" exact component={DelBill} />}
                    {this.props.authenticated && <Route path="/newitem" exact component={AddItem} />}
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