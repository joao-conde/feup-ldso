import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardTitle, Col } from 'reactstrap';
import PropTypes from 'prop-types';

class MenuLink extends Component {
    render() {
        return (
            <Col>
                <NavLink to={this.props.link}>
                    <Card>
                        <CardBody>
                            <CardTitle style={linkTextStyle}>
                                <p className="center-text" style={title}>Manage {this.props.title}</p>
                            </CardTitle>
                        </CardBody>
                    </Card>
                </NavLink >
            </Col>
        );
    }
}

const linkTextStyle = {
    minHeight: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const title = {
    fontSize: '2rem',
    fontWeight: 700,
    color: 'rgb(33, 37, 41)'
};

MenuLink.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string
};

export default MenuLink;
