import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddFacultyProject extends Component {

    constructor(props) {
        super(props);

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

        this.props.onChildSetRefresh();

    }

    render() {
        return(
            <Form>
                <FormGroup>
                    <Label for="projectTitle">Project Title</Label>
                    <Input
                        name="title"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.handleInputChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="projectDescription">Project Description</Label>
                    <Input
                        type="textarea"
                        name="content"
                        placeholder="Project Description"
                        value={this.state.content}
                        onChange={this.handleInputChange}/>
                </FormGroup>
                <Button color="secondary" onClick={this.handleSubmit}>Add</Button>
            </Form>
        );
    }

}

AddFacultyProject.propTypes = {
    match: PropTypes.object.isRequired,
    onChildSetRefresh: PropTypes.func.isRequired
};

export default AddFacultyProject;
