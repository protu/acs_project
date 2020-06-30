import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { addItem, getCategories, getSubategories, getProducts } from '../actions/itemActions';

class AddItem extends Component {


    async componentDidMount() {
        this.props.getCategories();
    }

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
                    <option value="">Select {props.input.name}</option>
                    {props.options.map(s => (
                        <option key={s.Id} value={s.Id}>{s.Name}</option>
                    ))}
                </select>
                {this.renderError(props.meta)}
            </div>
        );
    }

    onSubmit = formValues => {
        console.log(formValues);
        if (!formValues.cancel || Object.keys(formValues).length > 1) {
            this.props.addItem({
                ProductId: formValues.Products,
                BillId: this.props.bill.Id,
                Quantity: formValues.Quantity
            }, this.props.auth.token);
        }
    }

    render() {
        return (
            <div className="row mt-4">
                <div className="col-6 mx-auto">
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                        <Field
                            name="Category"
                            id="Category"
                            component={this.renderSelect}
                            label="Category"
                            type="select"
                            parse={Number}
                            props={{ options: this.props.categories }}
                        />
                        <Field
                            name="Subcategory"
                            id="Subcategory"
                            component={this.renderSelect}
                            label="Subcategory"
                            type="select"
                            parse={Number}
                            props={{ options: this.props.subcategories }}
                        />
                        <Field
                            name="Products"
                            id="Products"
                            component={this.renderSelect}
                            label="Products"
                            type="select"
                            parse={Number}
                            props={{ options: this.props.products }}
                        />
                        <Field
                            name="Quantity"
                            type="text"
                            parse={Number}
                            props={{ type: "text" }}
                            component={this.renderInput}
                            label="Quantity"
                            placeholder="Quantity"
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

const onChange = (values, dispatch, props, previousValues) => {
    if (values.Category != previousValues.Category) {
        dispatch(getSubategories(values.Category));
    }
    if (values.Subcategory != previousValues.Subcategory) {
        dispatch(getProducts(values.Subcategory));
    }
}

const mapStateToProps = state => {
    return ({
        auth: state.auth,
        bill: state.bills.current,
        categories: state.items.categories,
        subcategories: state.items.subcategories,
        products: state.items.products
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCategories: () => dispatch(getCategories()),
        getSubcategories: (categoryId) => dispatch(getSubategories(categoryId)),
        getProducts: (subcatId) => dispatch(getProducts(subcatId)),
        addItem: (item, token) => dispatch(addItem(item, token))
    };
};

const formWrapped = reduxForm({
    form: 'addItem',
    validate,
    onChange,
    onSubmitSuccess: (result, dispatch, props) => {
        props.history.push(`/bill`)
    }
})(AddItem);

export default connect(mapStateToProps, mapDispatchToProps)(formWrapped);