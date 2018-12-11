import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';
import MainContainer from '../components/MainContainer';
import { logout } from '../actions/authenticationActions';
import logo from '../assets/images/impactup.png';

import '../styles/App.css';

class AppContainer extends Component {

    render() {
        const { authenticated, logout } = this.props;

        if (authenticated) {
            return (
                <div style={{padding: '20px'}}>
                    <div className="intro">
                        <img src={logo} alt="application logo" width="140" />
                        <Button outline className="logoutBtn" onClick={logout}>Log Out</Button>
                    </div>
                    <MainContainer />
                </div >
            );
        } else {
            return (
                <Redirect
                    to={{
                        pathname: '/login'
                    }}
                />
            );
        }
    }
}

AppContainer.propTypes = {
    authenticated: PropTypes.bool,
    logout: PropTypes.func
};

const mapStateToProps = ({ auth }) => ({
    authenticated: auth.authenticated,
});

const mapDispatchToProps = {
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);