import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOut } from '../actions/loginActions';
import AuthBar from './authbar';
import { withRouter } from 'react-router-dom';


class AwAuth extends Component {

  onSignOutClick = () => {
    this.props.signOut();
    this.props.history.push('/');
  }

  renderAuthButton() {
    if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="btn btn-sm btn-danger">
          Sign out
        </button>
      )
    } else {
      return (
        <AuthBar />
      );
    }
  }

  render() {
    return (
      <div className="nav-link ml-auto">{this.renderAuthButton()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
}

const mapDispatchToProps = (dispatch) => {
  return {
      signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AwAuth));
