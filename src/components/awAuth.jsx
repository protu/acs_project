import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOut } from '../actions/loginActions';
import AuthBar from './authbar';


class AwAuth extends Component {

  onSignOutClick = () => {
    this.props.signOut();
  }

  renderAuthButton() {
    if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="btn btn-danger">
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

export default connect(mapStateToProps, mapDispatchToProps)(AwAuth);
