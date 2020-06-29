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
              <NavDropdown.Item><NavLink className="dropdown-item" to="/list">List</NavLink></NavDropdown.Item>
              {this.props.authenticated &&
                <NavDropdown.Item><NavLink className="dropdown-item" to="/new">New</NavLink></NavDropdown.Item>}
              {this.showCustomerViewDialog()}
            </NavDropdown>
            {this.props.menu === NAV_CUSTOMER && this.props.authenticated &&
            <Nav.Link href="/addbill">New Bill</Nav.Link>
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
          <NavDropdown.Item><NavLink className="dropdown-item" to="/edit">Edit</NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink className="dropdown-item" to="/delete">Delete</NavLink></NavDropdown.Item>
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