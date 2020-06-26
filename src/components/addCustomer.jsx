import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { addCustomer } from '../actions/customersActions'

class AddCustomer extends Component {

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        return (
            <div className="form-group">
                <label htmlFor={input.name}>{label}</label>
                <input id={input.name} {...input} className="form-control"/>
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.addCustomer(formValues)
    }

    render() {
        return (
            <div className="row mt-4">
                <div className="col-6 mx-auto">
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}
                // className="ui form error"
            >
                <Field
                    name="id"
                    component={this.renderInput}
                    label="Enter id"
                />
                <Field
                    name="name"
                    component={this.renderInput}
                    label="Enter name"
                />

                <Field
                    name="surname"
                    component={this.renderInput}
                    label="Enter surname"
                />
                <Field
                    name="email"
                    component={this.renderInput}
                    label="Enter email"
                />

                <button className="btn btn-primary">Submit</button>
            </form>
            </div></div>
        )
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.id) {
        errors.title = "You must enter a id";
    }
    if (!formValues.name) {
        errors.description = "You must enter a name";
    }
    return errors;
}

const formWrapped = reduxForm({
    form: 'addCustomer',
    validate
})(AddCustomer);

export default connect(null, { addCustomer })(formWrapped);