import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { editCustomer } from '../actions/customersActions'

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
        this.props.editCustomer(formValues);
    }

    render() {
        return (
            <div className="row mt-4">
                <div className="col-6 mx-auto">
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
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
                        <Field
                            name="telephone"
                            component={this.renderInput}
                            label="Enter phone number"
                        />
                        <Field
                            name="cityid"
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

    if (!formValues.email) {
        errors.title = "You must enter a id";
    }
    if (!formValues.name) {
        errors.description = "You must enter a name";
    }
    return errors;
}

const mapStateToProps = state => {
    return ({
        initialValues: state.customers.current
    })
}

const formWrapped = reduxForm({
    form: 'editCustomer',
    validate,
    onSubmitSuccess: (result, dispatch, props) => {
        props.history.push(`/customer/${props.initialValues.id}`)
    }
})(EditCustomer);

export default connect(mapStateToProps, { editCustomer })(formWrapped);