import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { addBill } from '../actions/billActions'

class AddBill extends Component {

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

    renderInput = (props) => {
        return (
            <div className="form-group">
                <label htmlFor={props.input.name}>{props.label}</label>
                <input id={props.input.name} {...props.input} type={props.type} className="form-control" />
                {this.renderError(props.meta)}
            </div>
        );
    }

    renderSelect = (props) => {
        return (
            <div className="form-group">
                <label htmlFor={props.input.name}>{props.label}</label>
                <select id={props.id} {...props.input} type={props.type} className="form-control" >
                <option value="">Select Seller</option>
                            {props.options.map(s => (
                                <option key={s.Id} value={s.Id}>{s.Name} {s.Surname}</option>
                            ))}
                </select>
                {this.renderError(props.meta)}
            </div>
        );
    }

    renderDate = (props) => {
        console.log(props);
        return (
            <div className="form-group">
                <label htmlFor={props.input.name}>{props.label}</label>
                <input id={props.input.name} type={props.type} placeholder={props.placeholder} className="form-control" />
                {this.renderError(props.meta)}
            </div>
        );
    }

    onSubmit = formValues => {
        if (!formValues.cancel || Object.keys(formValues).length > 1) {
            this.props.addBill({...formValues, CustomerID: this.props.customer.Id}, this.props.auth.token);
        }
    }

    render() {
        return (
            <div className="row mt-4">
                <div className="col-6 mx-auto">
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                        <Field
                            name="SellerId"
                            id="SellerId"
                            component={this.renderSelect}
                            label="Seller"
                            type="select"
                            parse={Number}
                            props = {{options: this.props.sellers}}
                        />
                        <Field className="form-group"
                            name="Date"
                            type="date"
                            component={this.renderInput}
                            label="Date"
                            placeholder="Date"
                        />
                        <Field
                            name="BillNumber"
                            props={{type: "text"}}
                            component={this.renderInput}
                            label="Bill Number"
                            placeholder="Bill Number"
                        />
                        <Field
                            name="CreditCardId"
                            props={{type: "text"}}
                            component={this.renderInput}
                            label="Credit Card Id"
                            placeholder="Credit Card Id"
                        />
                        <Field
                            name="Comment"
                            props={{type: "text"}}
                            component={this.renderInput}
                            label="Comment"
                            placeholder="Comment"
                        />
                        <button className="btn btn-primary" type="submit">Submit</button>
                        <button className="btn btn-secondary" onClick={this.onSubmit({ cancel: true })} >Cancel</button>

                    </form>
                </div></div>
        )
    }
}

const validate = formValues => {
    const errors = {};
    return errors;
}

const mapStateToProps = state => {
    return ({
        auth: state.auth,
        sellers: state.support.sellers,
        customer: state.customers.current
    })
}

const formWrapped = reduxForm({
    form: 'addBill',
    validate,
    onSubmitSuccess: (result, dispatch, props) => {
        props.history.push(`/customer`)
    }
})(AddBill);

export default connect(mapStateToProps, { addBill })(formWrapped);