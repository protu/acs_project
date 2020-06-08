import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  state = {}
  render() {
    return (
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <div className="navbar-brand">ACS Project</div>
          <ul className="navbar-nav">
            <li className="nav-item"><NavLink className="nav-link" to="/list">List</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/new">New</NavLink></li>
          </ul>
      </nav>
    );
  }
}

export default Navbar;