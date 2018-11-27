import React from 'react';
import PropTypes from 'prop-types';
import { WebView, StyleSheet, Dimensions } from 'react-native';
import { View, Text } from 'native-base';
import { connect } from 'react-redux';
import { getVideos } from '../reducers/modules/facultyReducer';
import Carousel from '../components/Carousel';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const { height } = Dimensions.get('window');

class VideosScreen extends React.Component {

    componentDidMount() {
        this.props.getVideos(this.props.name);
    }

    render() {
        const { videos, loading, name } = this.props;

        if (loading || typeof videos[0] == 'undefined') {
            return (
                <View>
                    <Text>
                        Loading...
                    </Text>
                </View>
            );
        }

        var webViews = [];
        let i=0;
        videos.forEach( function (video) {
                
            let url = video+'?playlist='+video.replace(video.match(/.*\//), '')+'&autoplay=1&loop=1&theme=dark&fs=0&rel=0&disablekb=1';
            let webView;
            webViews.push(
                <View style={styles.frame} key={i}>
                    <WebView
                        style={styles.webView}
                        javaScriptEnabled={true}
                        startInLoadingState
                        domStorageEnabled={true}
                        javaScriptEnabledAndroid={true}
                        onNavigationStateChange={
                            (req) => { return (req.url.search(video) !== -1)? (true) : (webView.stopLoading(), false); }
                        }
                        source={{
                            uri: url
                        }}
                        ref={c => {
                            webView = c;
                        }}
                    />
                </View>
            );
            i++;
        }.bind(this)
        );

        return (
            <View style={styles.container}>
                <Carousel videos={webViews} name={name}/>
            </View>
        );
    }

    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: wp('100%'),
        maxHeight: height,
        alignItems: 'center',
        justifyContent: 'center',
    },
    webView: {
        width: wp('100%'),
        elevation: 10,
        flex: 1,
    },
    frame: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'

    }
});


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
