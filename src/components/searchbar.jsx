import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { filterCustomer } from '../actions/customersActions'
import { FaSearch } from 'react-icons/fa'

class SearchBar extends Component {

    renderInput = ({ input, label, meta }) => {
        return (
            <div className="input-group md-form form-sm form-2 pl-0">
                <input {...input} className="form-control my-0 py-1 amber-border" type="text" placeholder="Search" aria-label="Search" />
                <button type="submit" className="input-group-text amber lighten-3"><FaSearch className="text-grey" /></button>
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.filterCustomer(formValues.search);
    }

    render() {
        return (
            <form className="mb-2" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <Field
                    name="search"
                    component={this.renderInput}
                />
            </form>
        )
    }

}

const formWrapped = reduxForm({
    form: 'searchBar',
})(SearchBar)

export default connect(null, { filterCustomer })(formWrapped);