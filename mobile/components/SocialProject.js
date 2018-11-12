import React from 'react';
import PropTypes from 'prop-types';
import { material } from 'react-native-typography';
import { View, Text, StyleSheet, Image, ActivityIndicator, TouchableOpacity, Dimensions } from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import { getSocialProjectDetails } from '../reducers/modules/facultyReducer';
import { facultyStyles } from '../constants/SpecificStyles';

class SocialProject extends React.Component {

    componentDidMount() {
        const { language, faculty, id } = this.props;

        this.props.getSocialProjectDetails(language, faculty, id);
    }

    componentDidUpdate(prevProps) {
        const { language, faculty, id } = this.props;

        if (prevProps.language != language || prevProps.id != id)
            this.props.getSocialProjectDetails(language, faculty, id);
    }

    render() {
        const { project, loading, faculty, navActionDown, navActionUp } = this.props;

        if (loading || !project) {
            return (
                <View>
                    <ActivityIndicator></ActivityIndicator>
                </View>
            );
        }
        return (
            <View>
                <View style={styles.fullScreen}>
                    <View style={styles.container}>
                        <View style={styles.topLeftChild}>
                            <Image source={{uri: project.images[0]}} style={[styles.topLeftImage, styles.icon, facultyStyles[faculty].icon]} />
                        </View>
                        <View style={styles.topRightChild}>
                            <View style={styles.topRightHeader}>
                                <Text style={styles.heading}>{project.title}</Text>
                                <Text style={styles.body}>{project.short_description}</Text>
                            </View>
                            <View style={styles.topRightChildImage}>
                                <Image source={{uri: project.images[1]}} style={[styles.topRightImage, styles.icon, facultyStyles[faculty].icon]} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.topNavigation}>
                        <TouchableOpacity onPress={navActionDown}>
                            <Icon type="FontAwesome" name="caret-down" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.fullScreen}>
                    <View style={styles.bottomNavigation}>
                        <TouchableOpacity onPress={navActionUp}>
                            <Icon type="FontAwesome" name="caret-up" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container} >
                        <View style={styles.bottomLeftChild}>
                            <Text style={styles.body}>{project.content}</Text>
                        </View>
                        <View style={styles.bottomRightChild}>
                            <Image source={{uri: project.images[1]}} style={[styles.bottomRightImage, styles.icon, facultyStyles[faculty].icon]} />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

SocialProject.propTypes = {
    id: PropTypes.string,
    faculty: PropTypes.string,
    loading: PropTypes.bool,
    project: PropTypes.object,
    language: PropTypes.string,
    getSocialProjectDetails: PropTypes.func,
    navActionUp: PropTypes.func,
    navActionDown: PropTypes.func
};

const styles = StyleSheet.create({
    // Global
    fullScreen: {
        height: Dimensions.get('window').height,
    },
    container: {
        flex: 5,
        flexDirection: 'row',
    },
    icon: {
        borderRadius: 25,
        borderWidth: 5
    },

    // Top View
    topNavigation: {
        flex: 1,
        alignItems: 'center' 
    },
    topLeftChild: {
        margin: 10,
        flex: 1,
    },
    topRightChild: {
        margin: 10,
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'flex-end'
    },
    topLeftImage: {
        flex: 1,
        margin: 10,
        width: undefined,
        height: undefined
    },
    topRightHeader: {
        flex: 2,
    },
    topRightChildImage: {
        flex: 3,
    },
    topRightImage: {
        flex: 1,
        margin: 10,
        marginTop: 25,
        width: undefined,
        height: undefined
    },

    //Bottom View
    bottomNavigation: {
        marginTop: 10,
        flex: 1,
        alignItems: 'center'
    },
    bottomLeftChild: {
        marginVertical: 10,
        marginHorizontal: 15,
        flex: 1,
    },
    bottomRightChild: {
        margin: 10, 
        flex: 1,
        justifyContent: 'flex-start'
    },
    bottomRightImage: {
        flex: 0.5,
        margin: 10,
        width: undefined,
        height: undefined
    },

    // Typography
    heading: {
        ...material.display1Object,
        fontFamily: 'Quicksand_regular',
        marginTop: 'auto',
        marginBottom: 20,
    },
    body: {
        ...material.subheadingObject,
        fontFamily: 'OpenSans_regular',
        fontSize: 20,
    }
});

const mapStateToProps = ({ faculty, language }) => ({
    faculty: faculty.name,
    loading: faculty.loading,
    project: faculty.currSocialProject,
    language: language.selection
});

const mapDispatchToProps = {
    getSocialProjectDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(SocialProject);