import React, { Component } from 'react'

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
       <div >
       {/* <a href="#"><img src={require('../assets/plus-circle.png')} className="plus"/></a> */}
         {
           projects.map(proj => (
           <button key={proj.id} className="faculty_proj">
             {proj.title}
           </button>
         ))}
       </div>
     );
   }
 }
}

export default Sidebar
