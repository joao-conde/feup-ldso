import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, View, ActivityIndicator, Text } from 'react-native';
import { H1, Content } from 'native-base';
import { connect } from 'react-redux';
import { getSocialProjectDetails } from '../reducers/modules/facultyReducer';

class ProjectView extends React.Component {

    componentDidMount() {
        const { language, name, id } = this.props;

        this.props.getSocialProjectDetails(language, name, id);
    }

    componentDidUpdate(prevProps) {
        const { language, name, id } = this.props;

        if (prevProps.language != language)
            this.props.getSocialProjectDetails(language, name, id);
    }

    render() {
        const { loading, project } = this.props;

        if (loading) {
            return (
                <View style={styles.isLoading}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <Content contentContainerStyle={styles.content}>
                <H1>{project.title}</H1>
                <Image style={styles.image} source={require('../assets/images/icon.png')} />
                <Text style={styles.text}> {project.content} </Text>
            </Content>
        );
    }
}

ProjectView.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    loading: PropTypes.bool,
    project: PropTypes.object,
    language: PropTypes.string,
    getSocialProjectDetails: PropTypes.func
};

const styles = StyleSheet.create({
    isLoading: {
        flex: 1,
        padding: 20
    },
    content: {
        paddingTop: 50,
        alignItems: 'center'
    },

    text: {
        paddingTop: 30,
        maxWidth: 500,
        textAlign: 'justify',
        paddingBottom: 100
    },

    title: {
        textAlign: 'center',
        alignItems: 'center'
    },
    image: {
        marginTop: 30,
        alignItems: 'center'
    }
});

const mapStateToProps = ({ faculty, language }) => ({
    name: faculty.name,
    loading: faculty.loading,
    project: faculty.currSocialProject,
    language: language.selection
});

const mapDispatchToProps = {
    getSocialProjectDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectView);