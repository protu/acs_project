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
                    <div className="col-4 mt-5 mx-auto font-medium text-center">
                        <p>Use navigation menu to start</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
