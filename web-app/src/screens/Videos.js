import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFaculty } from '../actions/facultyActions';
import { getVideos, editVideo } from '../actions/videosActions';
import PromotionalVideo from '../components/PromotionalVideo';

class Videos extends Component {

    componentDidMount() {
        this.updateFaculty();
    }

    componentDidUpdate(prevProps) {
        const { faculty } = this.props;

        if (prevProps.faculty !== faculty)
            this.updateFaculty();
    }

    updateFaculty() {
        const { match, faculty, getVideos, setFaculty } = this.props;

        setFaculty(match.params.faculty);
        getVideos(faculty, 'en');
        getVideos(faculty, 'pt');
    }

    render() {
        const { loading, loadingAction, faculty, videosEN, videosPT, editVideo } = this.props;

        return (
            <div style={contentStyle}>
                <PromotionalVideo loading={loading} loadingAction={loadingAction} faculty={faculty} videosEN={videosEN} videosPT={videosPT} mainAction={editVideo}/>
            </div>
        );
    }
}

const contentStyle = {
    display: 'flex',
    flexDirection: 'row'
};

Videos.propTypes = {
    loading: PropTypes.bool,
    loadingAction: PropTypes.bool,
    faculty: PropTypes.string,
    videosEN: PropTypes.object,
    videosPT: PropTypes.object,
    setFaculty: PropTypes.func,
    getVideos: PropTypes.func,
    editVideo: PropTypes.func,
    match: PropTypes.object
};

const mapStateToProps = ({ faculty, videos }) => ({
    faculty: faculty.name,
    loading: videos.loading,
    loadingAction: videos.loadingAction,
    videosEN: videos.videosEN,
    videosPT: videos.videosPT
});


const mapDispatchToProps = {
    setFaculty,
    getVideos,
    editVideo
};

export default connect(mapStateToProps, mapDispatchToProps)(Videos);
