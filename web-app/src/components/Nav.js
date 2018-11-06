import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import FacultyAPI from '../FacultyAPI';
import Sidebar from './Sidebar';
import AddFacultyProject from './AddFacultyProject';
import Delete from './Delete';
import Editor from './Editor';

class Nav extends Component {
  constructor(props) {
    super(props);
      this.state = {
          refresh: true
      };
  }

  handleChildSetRefresh = () =>{
    this.setState({
        refresh: true
    });
  }

  handleChildUnsetRefresh = () =>{
    this.setState({
        refresh: false
    });
  }

  handleGetRefresh = () => {
    return this.state.refresh;
  }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1>ImpactUP</h1>
                    <ul className="header">
                        {
                            FacultyAPI.all().map(p => (
                                <li key={p.name}>
                                    <NavLink to={`/faculties/${p.name}`}>{p.name}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                    <div className = "rowC">
                        <Route exact path="/" component={Home} />
                        <Route path='/faculties/:faculty' render={(props)=> <Sidebar {...props} onChildSetRefresh={this.handleChildSetRefresh} onGetRefresh={this.handleGetRefresh} onChildUnsetRefresh={this.handleChildUnsetRefresh}/>}/>
                        <div>
                            <Route path={'/faculties/:faculty/:project'} render={(props)=> <Editor {...props} onChildSetRefresh={this.handleChildSetRefresh} />}/>
                            <Route path={'/faculties/:faculty/:project'} render={(props)=> <Delete {...props} onChildSetRefresh={this.handleChildSetRefresh} />}/>
                        </div>
                        <div>
                            <Route exact path='/faculties/:faculty' render={(props)=> <AddFacultyProject {...props} onChildSetRefresh={this.handleChildSetRefresh} />}/>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Nav;
