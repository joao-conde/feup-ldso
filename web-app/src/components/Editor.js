import React, {Component} from "react";
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

class Editor extends Component {

    constructor(props) {
        super(props);

        this.state = {
          error: null,
          isLoaded: false,
          projects: []
         };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      const route = process.env.REACT_APP_ENDPOINT + "faculties/en/" + this.props.match.params.faculty.toLowerCase() + "/social-projects";
      fetch(route)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              projects: result,
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    handleInputChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleSubmit(event){
      event.preventDefault();
      const route = process.env.REACT_APP_ENDPOINT + "faculties/en/" + this.props.match.params.faculty.toLowerCase() + "/social-projects?where[id]=" + this.props.match.params.project;
      fetch(route, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      })
      .then(response => response.json())
    }

    render() {
      const { error, isLoaded, projects } = this.state;

      return (
        <div>
        {
          projects.map(proj => {
            if(this.props.match.params.project == proj.id)
                return <form key={proj.id}>
                  <label>
                    Project Title
                    <br/>
                    <input
                      name="title"
                      placeholder={proj.title}
                      value={this.state.title}
                      onChange={this.handleInputChange}/>
                  </label>
                  <br/>
                  <label>
                    Project Description
                    <br/>
                    <textarea
                      name="content"
                      placeholder={proj.content}
                      value={this.state.content}
                      onChange={this.handleInputChange}/>
                  </label>
                  <br/>
                  <label>
                    <Button color="secondary" onClick={this.handleSubmit}>Edit</Button>
                  </label>
                </form>
                }
                )}
                </div>
              );}
            }

            Editor.propTypes = {
                match: PropTypes.object.isRequired
            };

  export default Editor;
