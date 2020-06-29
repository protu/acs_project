import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { editCustomer, currCustomer } from '../actions/customersActions'

class EditCustomer extends Component {

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
                <input id={input.name} {...input} className="form-control" />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.currCustomer(formValues);
        this.props.editCustomer(formValues, this.props.auth.token);
    }
    
    render() {
        return (
            <div className="row mt-4">
                <div className="col-6 mx-auto">
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                        <Field
                            name="Name"
                            component={this.renderInput}
                            label="Enter name"
                        />
                        <Field
                            name="Surname"
                            component={this.renderInput}
                            label="Enter surname"
                        />
                        <Field
                            name="Email"
                            component={this.renderInput}
                            label="Enter email"
                        />
                        <Field
                            name="Telephone"
                            component={this.renderInput}
                            label="Enter phone number"
                        />
                        <Field
                            name="CityId"
                            component={this.renderInput}
                            label="Enter city ID"
                        />
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div></div>
        )
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.Name) {
        errors.title = "You must enter a name";
    }
    if (!formValues.Surname) {
        errors.description = "You must enter a surname";
    }
    if (!formValues.Email) {
        errors.description = "You must enter a e-mail";
    }
    return errors;
}

const mapStateToProps = state => {
    return ({
        initialValues: state.customers.current,
        auth: state.auth
    })
}

const formWrapped = reduxForm({
    form: 'editCustomer',
    validate,
    onSubmitSuccess: (result, dispatch, props) => {
        props.history.push(`/customer`)
    }
})(EditCustomer);

export default connect(mapStateToProps, { editCustomer, currCustomer })(formWrapped);