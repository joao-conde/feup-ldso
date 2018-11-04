import React, {Component} from "react";
import { Button } from 'reactstrap';

class FacultyProject extends Component{

  constructor(props){
    super(props);

    this.state = {
        error: null,
        isLoaded: false,
        project: []
    };

  }

  componentDidMount() {
    const route = process.env.REACT_APP_ENDPOINT + "faculties/en/" + this.props.match.params.faculty.toLowerCase() + "/social-projects?filter[where][id]=" + this.props.match.params.project;
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

  render(){
    const { error, isLoaded, project } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {
            project.map(proj => (
            <div key={proj.id}>
              {proj.title}
            </div >
          ))}
        </div>
      );
    }
  }
 }

export default FacultyProject;
