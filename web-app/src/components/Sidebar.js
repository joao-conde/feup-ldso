import React, { Component } from 'react';
import {  Route,NavLink } from "react-router-dom";
import Editor from "./Editor";

// The Faculty looks up the Faculty using the number parsed from
// the URL's pathname. If no Faculty is found with the given
// number, then a "Faculty not found" message is displayed.
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
       <div>
         {
           projects.map(proj => (
           <button key={proj.id} className="faculty_proj">
              {proj.id}
             <NavLink to={'/faculties/' + this.props.match.params.faculty.toLowerCase() + `/${proj.id}`}>{proj.title}</NavLink>
           </button>
         ))}
       </div>
       <div>
         <Route path={'/faculties/:faculty/:project'} component={Editor}/>
       </div>
       </div>
     );
   }
 }
}

export default Sidebar
