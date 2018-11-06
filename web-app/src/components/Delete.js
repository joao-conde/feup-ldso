import React, {Component} from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

class Delete extends Component{

    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();

        const route = process.env.REACT_APP_ENDPOINT + 'faculties/en/' + this.props.match.params.faculty.toLowerCase() + '/social-projects?where[id]=' + this.props.match.params.project;
        fetch(route, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
    }

    render(){
        return(
            <Button color="secondary" onClick={this.handleSubmit}>Delete</Button>
        );
    }
}

Delete.propTypes = {
    match: PropTypes.object.isRequired
};


export default Delete;
