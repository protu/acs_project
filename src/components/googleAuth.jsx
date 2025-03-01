import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/loginActions';


class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '297705720385-incaj0vigpne6sshdg0lt56cor1qhv41.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = isSignedIn => {
    if(isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="btn btn-danger">
          <i className="google icon" />
          Sign out
        </button>
      )
    } else {
      return (
        <button onClick={this.onSignInClick} className="btn btn-success">
          <i className="google icon" />
          Sign in with Google
        </button>
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

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
