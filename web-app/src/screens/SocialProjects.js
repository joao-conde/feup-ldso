import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import Route from 'react-router-dom/Route';
import { throttle } from 'throttle-debounce';
import { deepEqual } from '../utils';
import { setFaculty } from '../actions/facultyActions';
import { getProjects, getProjectDetails, addProject, editProject, deleteProject, searchProjects } from '../actions/projectsActions';
import Sidebar from '../components/Sidebar';
import GenericProject from '../components/GenericProject';

class SocialProjects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ''
        };
        this.updateQuery = this.updateQuery.bind(this);
    }

    componentDidMount() {
        this.updateFaculty();
    }

    componentDidUpdate(prevProps, prevState) {
        const { faculty, currProjEN, currProjPT, searchProjects, mapIds } = this.props;
        const { query } = this.state;

        if (prevProps.faculty !== faculty)
            this.updateFaculty();

        if (prevState.query !== query)
            searchProjects(faculty, query);

        if (Object.keys(prevProps.mapIds).length > Object.keys(mapIds).length)
            if (!global.__TEST__) NotificationManager.success('Successfully deleted project!');

        if (currProjEN != null && currProjPT != null) {
            if ((prevProps.currProjEN != null && prevProps.currProjEN.id === currProjEN.id && !deepEqual(prevProps.currProjEN, currProjEN)) ||
                (prevProps.currProjPT != null && prevProps.currProjPT.id === currProjPT.id && !deepEqual(prevProps.currProjPT, currProjPT)))
                if (!global.__TEST__) throttle(500, NotificationManager.success('Successfully edited project!'));
        }
    }

    updateFaculty() {
        const { match, faculty, getProjects, setFaculty } = this.props;

        setFaculty(match.params.faculty);
        getProjects(faculty, 'pt');
        getProjects(faculty, 'en');
    }

    updateQuery(query) {
        this.setState({
            query: query
        });
    }

    render() {
        const { loading, loadingAction, faculty, projectsEN, projectsPT, currProjEN, currProjPT, getProjectDetails, editProject, addProject, deleteProject } = this.props;

        return (
            <div style={contentStyle}>
                <Sidebar loading={loading} faculty={faculty} projectsEN={projectsEN} projectsPT={projectsPT} idProjEN={currProjEN != null ? currProjEN.id : null} action={getProjectDetails} search={this.updateQuery} query={this.state.query} />
                <Route exact path='/faculties/:faculty/projects' render={() =>
                    <GenericProject add={false} loading={loading} loadingAction={loadingAction} faculty={faculty} projEN={currProjEN} projPT={currProjPT} mainAction={editProject} delAction={deleteProject} />
                } />
                <Route exact path='/faculties/:faculty/projects/new' render={() =>
                    <GenericProject add={true} loading={loading} loadingAction={loadingAction} faculty={faculty} projEN={{}} projPT={{}} mainAction={addProject} delAction={null} />
                } />
            </div>
        );
    }
}

const contentStyle = {
    display: 'flex',
    flexDirecation: 'row'
};

SocialProjects.propTypes = {
    match: PropTypes.object.isRequired,
    faculty: PropTypes.string,
    loading: PropTypes.bool,
    loadingAction: PropTypes.bool,
    projectsEN: PropTypes.array,
    projectsPT: PropTypes.array,
    currProjEN: PropTypes.object,
    currProjPT: PropTypes.object,
    mapIds: PropTypes.object,
    setFaculty: PropTypes.func,
    getProjects: PropTypes.func,
    getProjectDetails: PropTypes.func,
    addProject: PropTypes.func,
    editProject: PropTypes.func,
    deleteProject: PropTypes.func,
    searchProjects: PropTypes.func
};

const mapStateToProps = ({ faculty, socialProjects }) => ({
    faculty: faculty.name,
    loading: socialProjects.loading,
    loadingAction: socialProjects.loadingAction,
    projectsEN: socialProjects.projectsEN,
    projectsPT: socialProjects.projectsPT,
    currProjEN: socialProjects.currProjEN,
    currProjPT: socialProjects.currProjPT,
    mapIds: socialProjects.idsMap
});

const mapDispatchToProps = {
    setFaculty,
    getProjects,
    getProjectDetails,
    addProject,
    editProject,
    deleteProject,
    searchProjects
};

export default connect(mapStateToProps, mapDispatchToProps)(SocialProjects);