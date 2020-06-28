import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import GoogleAuth from './googleAuth';
import { connect } from 'react-redux'
import { NAV_CUSTOMER } from '../actions/types';
import SearchBar from './searchbar';

class Navbar extends Component {

  render() {
    return (
      <span>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
          <NavLink className="navbar-brand" to="/">ACS Project</NavLink>
          <ul className="navbar-nav">
            <li className="nav-item"><NavLink className="nav-link" to="/list">List</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/new">New</NavLink></li>
            {this.showCustomerViewDialog()}
          </ul>
          <GoogleAuth />
        </nav></span>
    );
  }

  showCustomerViewDialog = () => {
    if (this.props.menu === NAV_CUSTOMER) {
      return (
        <React.Fragment>
          <li className="nav-item"><NavLink className="nav-link" to="/edit">Edit</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/delete">Delete</NavLink></li>
        </React.Fragment>
      );
    }
  }

}

const mapStateToProps = (state) => {
  return {
    menu: state.nav.menu
  }
};

export default connect(mapStateToProps)(Navbar);