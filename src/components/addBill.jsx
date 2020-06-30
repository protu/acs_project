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
                <input id={props.id} {...props.input} type={props.type} className="form-control" />
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
        console.log(formValues);
        // this.props.addBill(formValues, this.props.auth.token);
    }

    render() {
        return (
            <div className="row mt-4">
                <div className="col-6 mx-auto">
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                        <Field
                            name="SellerId"
                            id="SellerId"
                            component="select"
                            label="Seller"
                            type="select"
                        >
                            <option value="">Select Seller</option>
                            {this.props.sellers.map(s => (
                                <option key={s.Id} value={s.Id}>{s.Name} {s.Surname}</option>
                            ))}
                            </Field>
                        <Field className="form-group"
                            name="Date"
                            type="date"
                            props={{type: "date"}}
                            component="input"
                            label="Date"
                            placeholder="Date"
                        />
                        <Field
                            name="Comment"
                            props={{type: "text"}}
                            component={this.renderInput}
                            label="Comment"
                            placeholder="Comment"
                        />
                        <button className="btn btn-primary">Submit</button>
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
        sellers: state.support.sellers
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