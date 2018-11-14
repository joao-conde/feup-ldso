import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSocialProjects, getSocialProjectDetails } from '../reducers/modules/facultyReducer';
import GenericProjectsScreen from './GenericProjectsScreen';

class SocialProjectsScreen extends React.Component {

    render() {
        const { projects, currProj, getSocialProjects, getSocialProjectDetails } = this.props;

        return (
            <GenericProjectsScreen projects={projects} single={currProj} getAll={getSocialProjects} getOne={getSocialProjectDetails} />
        );
    }
}

SocialProjectsScreen.propTypes = {
    projects: PropTypes.array,
    currProj: PropTypes.object,
    getSocialProjects: PropTypes.func,
    getSocialProjectDetails: PropTypes.func
};

const mapStateToProps = ({ faculty }) => ({
    projects: faculty.socialProjects,
    currProj: faculty.currSocialProject,
});

const mapDispatchToProps = {
    getSocialProjects,
    getSocialProjectDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(SocialProjectsScreen);
