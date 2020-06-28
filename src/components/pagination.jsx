import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

class Pagination extends Component {
    state = {};
    render() {
        const { pageSize, itemsCount, currentPage, onPageChange, onPageSizeChange } = this.props;
        const pagesCount = Math.ceil(itemsCount / pageSize);
        const pages = _.range(1, pagesCount + 1);
        return (
            <nav>
                <ul className='pagination pagination-sm'>
                    <li className="page-item">
                        <button className="page-link" href="#"
                            onClick={() => { onPageChange(currentPage - 1 > 1 ? currentPage - 1 : 1) }}>Previous</button>
                    </li>
                    {pages.map((page) => (
                        <li key={`page${page}`} className={page === currentPage ? 'page-item active' : 'page-item'} >
                            <button className='page-link' href='#' onClick={() => onPageChange(page)} > {page} </button>
                        </li>))}
                    <li className="page-item"><button className="page-link" href="#"
                        onClick={() => onPageChange(currentPage + 1 < pagesCount ? currentPage + 1 : pagesCount)}>Next</button></li>
                    <span className="nav-link ml-auto">Records per page: </span>
                        {[5, 10, 20, 50].map((size) => (
                            <li key={`size${size}`} className={size === pageSize ? 'page-item active' : 'page-item'}>
                                <button href="#" className="page-link" onClick={() => onPageSizeChange(size)}>{size}</button>
                            </li>
                        ))}
                </ul>
            </nav>
        );
    }
}
Pagination.propTypes = {
    pageSize: PropTypes.number.isRequired,
    itemsCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;
