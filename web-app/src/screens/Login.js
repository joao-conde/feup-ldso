import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Label, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import { login } from '../actions/authenticationActions';
import logo from '../assets/images/impactup.png';

import '../styles/GenericProject.css'; // Importing because of progress button
import '../styles/Login.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submit() {
        const { login } = this.props;
        const { username, password } = this.state;

        login(username, password);
    }

    render() {
        const { authenticated, loading } = this.props;

        if (!authenticated) {
            return (
                <div className="loginContainer">
                    <div className="cssTool"></div>
                    <div className="login">
                        <div className="logo">
                            <img src={logo} alt="application logo" width="140" />
                        </div>
                        <Form className="form">
                            <Col>
                                <FormGroup>
                                    <Label for="username">Username</Label>
                                    <Input
                                        placeholder="Enter Username"
                                        name="username"
                                        id="username"
                                        value={this.state.username}
                                        onChange={this.handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="username">Password</Label>
                                    <Input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange} />
                                </FormGroup>
                                <Button color="success" className={`loginBtn ${loading ? 'm-progress' : ''}`} onClick={this.submit}>Log in</Button>
                            </Col>
                        </Form>
                    </div>
                </div>
            );
        } else {
            return (
                <Redirect
                    to={{
                        pathname: '/'
                    }}
                />
            );
        }
    }
}

Login.propTypes = {
    authenticated: PropTypes.bool,
    loading: PropTypes.bool,
    login: PropTypes.func
};

const mapStateToProps = ({ auth }) => ({
    authenticated: auth.authenticated,
    loading: auth.loading
});

const mapDispatchToProps = {
    login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);