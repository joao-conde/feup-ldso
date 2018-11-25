import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter, Redirect } from 'react-router-dom';
import Switch from 'react-router-dom/Switch';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FacultyMenu from '../screens/FacultyMenu';
import SocialProjects from '../screens/SocialProjects';

import Home from './Home';
import FacultyAPI from '../FacultyAPI';

import '../styles/MainContainer.css';
import Videos from '../screens/Videos';
import Prospects from '../screens/Prospects';


class MainContainer extends Component {
    render() {
        const { faculty } = this.props;

        return (
            <BrowserRouter>
                <div>
                    <div className="navigator">
                        {
                            FacultyAPI.all().map(p => (
                                <h6 key={p.name} className={p.name}>
                                    <NavLink to={`/faculties/${p.name}`}
                                        isActive={(_, location) => location.pathname.includes(`/faculties/${p.name}`)}>
                                        {p.name.toUpperCase()}
                                    </NavLink>
                                </h6>
                            ))
                        }
                    </div>
                    <div className={`container ${faculty}`}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path='/faculties/:faculty' component={FacultyMenu} />
                            <Route path='/faculties/:faculty/projects' component={SocialProjects} />
                            <Route path='/faculties/:faculty/videos' component={Videos} />
                            <Route path='/faculties/:faculty/prospects' component={Prospects} />
                            <Route render={() => <Redirect to='/' />} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

MainContainer.propTypes = {
    faculty: PropTypes.string
};

const mapStateToProps = ({ faculty }) => ({
    faculty: faculty.name
});

export default connect(mapStateToProps, null)(MainContainer);
