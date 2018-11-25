import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFaculty } from '../actions/facultyActions';
import { resetProjects } from '../actions/projectsActions';
import MenuLink from '../components/MenuLink';

class FacultyMenu extends Component {

    componentDidMount() {
        this.props.setFaculty(this.props.match.params.faculty);
        this.props.resetProjects();
    }

    componentDidUpdate() {
        this.props.setFaculty(this.props.match.params.faculty);
    }

    render() {
        const faculty = this.props.match.params.faculty;

        return (
            <div style={menuStyle}>
                <MenuLink link={`/faculties/${faculty}/projects`} title="Social Impact Projects"/>
                <MenuLink link={`/faculties/${faculty}'/videos`} title="Promotional Videos"/>
                <MenuLink link={`/faculties/${faculty}'/prospects`} title="Future Plans"/>
            </div>
        );
    }
}

const menuStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
};

FacultyMenu.propTypes = {
    match: PropTypes.object.isRequired,
    setFaculty: PropTypes.func,
    resetProjects: PropTypes.func
};

const mapDispatchToProps = {
    setFaculty,
    resetProjects
};

export default connect(null, mapDispatchToProps)(FacultyMenu);
