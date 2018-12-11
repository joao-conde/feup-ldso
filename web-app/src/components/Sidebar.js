import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import withRouter from 'react-router-dom/withRouter';
import SearchBar from './SearchBar';
import Loading from '../components/Loading';
import plus_circle from '../assets/images/plus_circle.png';

import '../styles/SideBar.css';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstRequest: false
        };
    }

    click(idx) {
        const { faculty, projectsEN, projectsPT, idProjEN, action, history } = this.props;

        history.push(`/faculties/${faculty}/projects`);

        if (projectsEN[idx] != null && projectsPT[idx] != null && projectsEN[idx].id !== idProjEN) {
            action(faculty, 'en', projectsEN[idx].id);
            action(faculty, 'pt', projectsPT[idx].id);
        }
    }

    render() {
        const { loading, faculty, projectsEN, idProjEN, search, query } = this.props;

        return (
            <div className="sidebarParent">
                <div className="sidebar">
                    <SearchBar search={search} query={query} />
                    <NavLink to={`/faculties/${faculty}/projects/new`} className="addBtnLink">
                        <img src={plus_circle} alt="Add button" className="addBtn" />
                    </NavLink>
                    {
                        loading ? <Loading></Loading> :
                            projectsEN.map((proj, idx) => (
                                <div key={idx} className="iconContainer">
                                    <div className="imgParent">
                                        <img id="projSidebar" src={proj.images[0]} alt="Project icon" className={`imgBtn  ${projectsEN[idx].id === idProjEN ? faculty : ''}`}
                                            onClick={() => this.click(idx)} />
                                    </div>
                                    <div className="iconLabel">{proj.title}</div>
                                </div>
                            ))
                    }
                </div>
            </div>
        );
    }
}

Sidebar.propTypes = {
    history: PropTypes.object,
    loading: PropTypes.bool,
    faculty: PropTypes.string,
    projectsEN: PropTypes.array,
    projectsPT: PropTypes.array,
    idProjEN: PropTypes.string,
    action: PropTypes.func,
    search: PropTypes.func,
    query: PropTypes.string
};

export default withRouter(Sidebar);
