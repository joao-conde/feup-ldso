import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

class Editor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            project: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const route = process.env.REACT_APP_ENDPOINT + 'faculties/en/' + this.props.match.params.faculty.toLowerCase() + '/social-projects?filter[where][id]=' + this.props.match.params.project;
        fetch(route)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        project: result,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );

    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        const route = process.env.REACT_APP_ENDPOINT + 'faculties/en/' + this.props.match.params.faculty.toLowerCase() + '/social-projects?where[id]=' + this.props.match.params.project;
        fetch(route, {
            method: 'PATCH',
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
        const { project } = this.state;

        return (
            <div>
                {
                    project.map(proj => (
                        <Form key={proj.id}>
                            <FormGroup>
                                <Label for="projectTitle">Project Title</Label>
                                <Input
                                    name="title"
                                    placeholder={proj.title}
                                    value={this.state.title}
                                    defaultValue={proj.title}
                                    onChange={this.handleInputChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="projectDescription">Project Description</Label>
                                <Input
                                    type="textarea"
                                    name="content"
                                    placeholder={proj.content}
                                    value={this.state.content}
                                    defaultValue={proj.content}
                                    onChange={this.handleInputChange}/>
                            </FormGroup>
                            <Button id="submitBtn" color="secondary" onClick={this.handleSubmit}>Edit</Button>
                        </Form>
                    ))}
            </div>
        );}
}

Editor.propTypes = {
    match: PropTypes.object.isRequired,
    onChildSetRefresh: PropTypes.func.isRequired
};

export default Editor;
