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
                <input id={input.name} {...input} className="form-control" />
                {this.renderError(meta)}
            </div>
        );
    }

    renderSelect = (props) => {
        return (
            <div className="form-group">
                <label htmlFor={props.input.name}>{props.label}</label>
                <select id={props.id} {...props.input} type={props.type} className="form-control" >
                    <option value="">Select City</option>
                    {props.options.map(s => (
                        <option key={s.Id} value={s.Id}>{s.Name}</option>
                    ))}
                </select>
                {this.renderError(props.meta)}
            </div>
        );
    }

    onSubmit = formValues => {
        if (!formValues.cancel || Object.keys(formValues).length > 1) {
            this.props.addCustomer(formValues, this.props.auth.token);
        }
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
                            id="CityId"
                            component={this.renderSelect}
                            label="Select city"
                            type="select"
                            parse={Number}
                            props={{ options: this.props.cities }}
                        />
                        <button className="btn btn-primary" type="submit" >Submit</button>
                        <button className="btn btn-secondary" onClick={this.onSubmit({ cancel: true })} >Cancel</button>
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
        auth: state.auth,
        cities: state.support.cities
    })
}

const formWrapped = reduxForm({
    form: 'addCustomer',
    validate,
    onSubmitSuccess: (result, dispatch, props) => {
        props.history.push(`/list`)
    }
})(AddCustomer);

export default connect(mapStateToProps, { addCustomer })(formWrapped);