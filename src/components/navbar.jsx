import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NAV_CUSTOMER } from '../actions/types';
import AwAuth from './awAuth';

class NavigationBar extends Component {

  render() {
    return (
      <Navbar bg="dark" className="navbar navbar-expand-md navbar-dark sticky-top">
        <NavLink className="navbar-brand" to="/">ACS Project</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Customers" id="basic-nav-dropdown">
              <NavLink className="dropdown-item" to="/list">List</NavLink>
              {this.props.authenticated &&
                <NavLink className="dropdown-item" to="/new">New</NavLink>}
              {this.showCustomerViewDialog()}
            </NavDropdown>
            {this.props.menu === NAV_CUSTOMER && this.props.authenticated &&
              <NavLink className="nav-link" to="/newbill">New Bill</NavLink>
            }
          </Nav>
          <AwAuth />
        </Navbar.Collapse>
      </Navbar>
    );
  }

  showCustomerViewDialog = () => {
    if (this.props.menu === NAV_CUSTOMER && this.props.authenticated) {
      return (
        <React.Fragment>
          <NavLink className="dropdown-item" to="/edit">Edit</NavLink>
          <NavLink className="dropdown-item" to="/delete">Delete</NavLink>
        </React.Fragment>
      );
    }
  }

}

const mapStateToProps = (state) => {
  return {
    menu: state.nav.menu,
    authenticated: state.auth.isSignedIn
  }
};

export default connect(mapStateToProps)(NavigationBar);