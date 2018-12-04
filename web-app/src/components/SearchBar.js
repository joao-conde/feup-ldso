import React, { Component } from 'react';
import { Input, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {DebounceInput} from 'react-debounce-input';
import PropTypes from 'prop-types';

import '../styles/SideBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.search = this.search.bind(this);
    }

    search(event) {
        const { search } = this.props;
        
        search(event.target.value);
    }

    render() {
        return (
            <Row>
                <Col className="searchBar" >
                    <FontAwesomeIcon className="search-icon" icon="search" />
                    <DebounceInput
                        className="form-control"
                        placeholder="search"
                        minLength={2}
                        debounceTimeout={1000}
                        onChange={this.search} />
                </Col>
            </Row>
        );
    }
}

SearchBar.propTypes = {
    search: PropTypes.func
};

export default SearchBar;
