import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'native-base';
import { connect } from 'react-redux';
import { getVideos } from '../reducers/modules/facultyReducer';

class VideosScreen extends React.Component {

    componentDidMount() {
        this.props.getVideos(this.props.name);
    }

    render() {
        const { name, loading } = this.props;

        if (loading) {
            return (
                <View>
                    <Text>
            Loading...
                    </Text>
                </View>
            );
        }
        return (
            <View>
                <Text>
          Placeholder for Videos Screen of {name}
                </Text>
            </View>
        );
    }
}

VideosScreen.propTypes = {
    name: PropTypes.string,
    loading: PropTypes.bool,
    getVideos: PropTypes.func
};

const mapStateToProps = ({ faculty }) => ({
    name: faculty.name,
    loading: faculty.loading,
    videos: faculty.videos
});

const mapDispatchToProps = {
    getVideos
};

export default connect(mapStateToProps, mapDispatchToProps)(VideosScreen);
