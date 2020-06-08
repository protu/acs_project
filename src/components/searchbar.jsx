import React, { Component } from 'react';

class SearchBar extends Component {
    state = { term: '' }
    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <form className="form-inline mr-auto" onSubmit={this.onSubmitForm}>
                <input className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    value={this.state.term}
                    onChange={(e) => this.setState({ term: e.target.value })} />
                <button className="btn btn-primary btn-rounded btn-sm my-0" type="submit">Search</button>
            </form>
        );
    }
}

export default SearchBar;