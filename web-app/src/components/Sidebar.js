import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {  Route,NavLink } from "react-router-dom";

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            projects: []
        };

    }

    componentDidMount() {
        const route = process.env.REACT_APP_ENDPOINT + 'faculties/en/' + this.props.match.params.faculty.toLowerCase() + '/social-projects';
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
            );
    }

 componentDidUpdate(prevProps) {
  const route = process.env.REACT_APP_ENDPOINT + "faculties/en/" + this.props.match.params.faculty.toLowerCase() + "/social-projects";
  if (prevProps.match.params.faculty !== this.props.match.params.faculty){
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
 }

 render() {
   const { error, isLoaded, projects } = this.state;
   if (error) {
     return <div>Error: {error.message}</div>;
   } else if (!isLoaded) {
     return <div>Loading...</div>;
   } else {
     return (
       <div>
         {
           projects.map(proj => (
           <button key={proj.id} className="faculty_proj">
             <NavLink to={'/faculties/' + this.props.match.params.faculty.toLowerCase() + `/${proj.id}`}>{proj.title}</NavLink>
           </button>
         ))}
       </div>
     );
   }
 }
}


Sidebar.propTypes = {
    match: PropTypes.object.isRequired
};

export default Sidebar;
