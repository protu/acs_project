import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { signIn } from '../actions/loginActions'
import { NavLink, withRouter } from 'react-router-dom';

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
            <span className="form-inline">
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
                    <button type="submit" className="btn btn-sm btn-success">Login</button>
                </form>
                <button className="btn btn-sm btn-info"><NavLink className="nav-item text-decoration-none text-white" to="/register">Register</NavLink></button>
            </span>
        )
    }

}

const formWrapped = reduxForm({
    form: 'authBar',
    onSubmitSuccess: (result, dispatch, props) => {
        props.history.push(`/`)
    }
})(AuthBar)


export default connect(null, { signIn })(withRouter(formWrapped));