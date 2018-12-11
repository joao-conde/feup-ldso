import React from 'react';
import PropTypes from 'prop-types';
import { material } from 'react-native-typography';
import { ImageBackground, View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import ActivityIndicatorView from './ActivityIndicatorView';
import { Icon, Badge } from 'native-base';
import { connect } from 'react-redux';
import { facultyStyles } from '../constants/SpecificStyles';

class GenericProject extends React.Component {

    componentDidMount() {
        const { language, faculty, id } = this.props;

        this.props.getOne(language, faculty, id);
    }

    componentDidUpdate(prevProps) {
        const { language, faculty, id } = this.props;

        if (prevProps.language != language || prevProps.id != id) 
            this.props.getOne(language, faculty, id);
    }

    render() {
        const { project, loading, faculty, language, navActionDown, navActionUp } = this.props;

        if (loading || !project)
            return ( <ActivityIndicatorView></ActivityIndicatorView> );

        return (
            <View>
                <ImageBackground source={require('../assets/images/background.png')} style={styles.fullScreen}>
                    <View style={styles.container}>
                        <View style={styles.topLeftChild}>
                            <Image source={{uri: project.images[0]}} style={[styles.topLeftImage, styles.icon, facultyStyles[faculty].icon]} />
                        </View>
                        <View style={styles.topRightChild}>
                            <View style={styles.topRightHeader}>
                                <View style={styles.statusButtonContainer}>
                                    { project.hasOwnProperty('active') &&
                                    <Badge style={[styles.statusButton, project.active ? styles.activeButton : styles.inactiveButton]}> 
                                        <Text style={styles.statusButtonText}>
                                            { language == 'en' ? project.active ? 'Active' : 'Inactive' : project.active ? 'Ativo' : 'Inativo '}
                                        </Text> 
                                    </Badge>
                                    }
                                </View>
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
                            <Icon type="FontAwesome" name="chevron-down"/>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <View style={[styles.fullScreen, styles.darkBackground]}>
                    <View style={styles.bottomNavigation}>
                        <TouchableOpacity onPress={navActionUp}>
                            <Icon type="FontAwesome" name="chevron-up" style={styles.whiteArrow} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container} >
                        <View style={styles.bottomLeftChild}>
                            <Text style={[styles.mainText, styles.body, styles.whiteFont]}>{project.content}</Text>
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

GenericProject.propTypes = {
    id: PropTypes.string,
    faculty: PropTypes.string,
    loading: PropTypes.bool,
    project: PropTypes.object,
    language: PropTypes.string,
    getOne: PropTypes.func,
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
    statusButtonContainer: {
        alignSelf: 'flex-end',
    },
    statusButton: {
        marginTop: 10,
        marginRight: 15,
    },
    statusButtonText: {
        margin: 3,
        color: 'white'
    },
    activeButton: {
        backgroundColor: 'green'
    },
    inactiveButton: {
        backgroundColor: 'red'
    },
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
    whiteArrow: {
        color: 'white'
    },
    darkBackground: {
        backgroundColor: '#1c1c1c'
    },
    bottomNavigation: {
        marginTop: 10,
        flex: 1,
        alignItems: 'center'
    },
    bottomLeftChild: {
        marginVertical: 10,
        marginHorizontal: 15,
        flex: 1,
        alignItems: 'center'
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
        lineHeight: 30
    },
    whiteFont: {
        color: 'white'
    },
    mainText: {
        maxWidth: 500
    }
});

const mapStateToProps = ({ faculty, language }) => ({
    faculty: faculty.name,
    loading: faculty.loading,
    language: language.selection
});

export default connect(mapStateToProps, null)(GenericProject);