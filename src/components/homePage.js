import React, { Component } from 'react';
import style from '../style.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 mt-5 mx-auto text-center">
                        <h3>ACS project home page</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 mt-5 mx-auto font-medium">
                        <p>Use navigation menu to start</p>
                        <p> The menu "List" will show all customers. With
                        "New" you can add a new customer in the database.</p>
                        <p>Inside the list, you can click on any record to show
                        the customers details. The table is searchable by all values and
                        you can sort by any column just by clicking on the header row.
                        The second click will reverse sort order.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
