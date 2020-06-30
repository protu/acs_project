import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
    state = { message: "", errormsg: "" }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 mt-5 mx-auto ">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="email" className="form-control" id="username" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter password" />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        <h3 className="mt-5 text-primary">{this.state.message}</h3>
                        <h3 className="mt-5 text-danger">{this.state.errormsg}</h3>
                    </div>
                </div>
            </div>
        );
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const user = {
            name: event.target.name.value,
            username: event.target.username.value,
            password: event.target.password.value,
            img: ""
        }
        console.log(user);
        axios.post("http://www.fulek.com/nks/api/aw/registeruser", user)
            .then(res => res.status === 200 ? this.setState({ message: "Sucessfuly registred", errormsg: "" }) : this.setState({ message: res.statusText }))
            .catch(err => this.setState({ errormsg: "Registration failed", message: "" }));
    }
}

export default Register;