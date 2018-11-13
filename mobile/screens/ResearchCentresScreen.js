import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getResearchCentres, getResearchCentreDetails } from '../reducers/modules/facultyReducer';
import GenericProjectsScreen from './GenericProjectsScreen';

class ResearchCentresScreen extends React.Component {

    render() {
        const { centres, currCentre, getResearchCentres, getResearchCentreDetails } = this.props;

        return (
            <GenericProjectsScreen projects={centres} single={currCentre} getAll={getResearchCentres} getOne={getResearchCentreDetails} />
        );
    }
}

ResearchCentresScreen.propTypes = {
    centres: PropTypes.array,
    currCentre: PropTypes.object,
    getResearchCentres: PropTypes.func,
    getResearchCentreDetails: PropTypes.func
};

const mapStateToProps = ({ faculty }) => ({
    centres: faculty.researchCentres,
    currCentre: faculty.currResearchCentre,
});

const mapDispatchToProps = {
    getResearchCentres,
    getResearchCentreDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(ResearchCentresScreen);
