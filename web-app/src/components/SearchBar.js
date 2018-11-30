import React, { Component } from 'react';
import { Input, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import '../styles/SideBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstRequest: false
        };
    }

    render() {
        return (
            <Row>
                <Col className="searchBar" >
                    <FontAwesomeIcon className="search-icon" icon="search" />
                    <Input placeholder="search" />
                </Col>
            </Row>
        );
    }
}

SearchBar.propTypes = {
};

export default SearchBar;
