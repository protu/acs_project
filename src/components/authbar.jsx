import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { signIn } from '../actions/loginActions'

class AuthBar extends Component {

    renderInput = ({ props }) => {
        return (
            <div className="from-group mb-2">
                <input {...props} className="form-control" />
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.signIn(formValues);
    }

    render() {
        return (
            <form className="form-inline ml-auto" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <Field
                    name="username"
                    id="username"
                    placeholder="Username"
                    type="text"
                    component="input"
                />
                <Field
                    name="password"
                    id="password"
                    placeholder="Password"
                    type="password"
                    component="input"
                />
                <button type="submit" className="btn btn-success">Login</button>
            </form>
        )
    }

}

const formWrapped = reduxForm({
    form: 'authBar',
})(AuthBar)


export default connect(null, { signIn })(formWrapped);