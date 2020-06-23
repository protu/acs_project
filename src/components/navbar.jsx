import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import GoogleAuth from './google-auth';

class Navbar extends Component {
  state = {
    customerView: false
  }
  render() {
    if (this.props.onCustomer) {
      this.setState({customerView: true});
    } 
    return (
      <span>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="navbar-brand">ACS Project</div>
        <ul className="navbar-nav">
          <li className="nav-item"><NavLink className="nav-link" to="/list">List</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/new">New</NavLink></li>
          {this.showCustomerViewDialog()}
        </ul>
        <GoogleAuth/>
      </nav></span>
    );
  }

  showCustomerViewDialog = () => {
    if (this.state.customerView) {
      return (
        <React.Fragment>
          <li className="nav-item"><NavLink className="nav-link" to="/edit">Edit</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/delete">Delete</NavLink></li>
        </React.Fragment>
      );
    }
  }
}

export default Navbar;