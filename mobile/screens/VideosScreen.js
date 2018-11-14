import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { View, Text } from 'native-base';
import { connect } from 'react-redux';
import { getVideos } from '../reducers/modules/facultyReducer';

class VideosScreen extends React.Component {

    componentDidMount() {
        this.props.getVideos(this.props.name);
    }

    render() {
        const { videos, loading } = this.props;

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
                <FlatList
                    noColumns={3}
                    data={videos}
                    renderItem={({ item }) => (
                        <Text>{item}</Text>
                    )}
                    keyExtractor={item => item}
                />
            </View>
        );
    }
}

VideosScreen.propTypes = {
    name: PropTypes.string,
    loading: PropTypes.bool,
    getVideos: PropTypes.func,
    videos: PropTypes.array
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
