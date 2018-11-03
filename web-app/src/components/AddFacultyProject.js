import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

class AddFacultyProject extends Component {

    constructor(props) {
        super(props);

        //key is DOM element name
        this.state = {
            title: '',
            content: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        const route = process.env.REACT_APP_ENDPOINT + 'faculties/en/' + this.props.match.params.faculty.toLowerCase() + '/social-projects'; 
        fetch(route, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
            .then(response => response.json());
    }

    render() {
        return (
            <form>
                <label>
              Project Title
                    <br/>
                    <input
                        name="title"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label>
              Project Description
                    <br/>
                    <textarea 
                        name="content"
                        placeholder="Project Description"
                        value={this.state.content}
                        onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label>
                    <Button color="secondary" onClick={this.handleSubmit}>Add</Button>
                </label>
            </form>
        );
    }

}

AddFacultyProject.propTypes = {
    match: PropTypes.object.isRequired
};

export default AddFacultyProject;
