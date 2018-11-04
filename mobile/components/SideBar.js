import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Content } from 'native-base';
import { FlatList, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { getSocialProjects } from '../reducers/modules/facultyReducer';

class SideBar extends React.Component {

    componentDidMount() {
        const { language, name } = this.props;

        this.props.getSocialProjects(language, name);
    }

    render() {
        const { loading, projects } = this.props;

        if (loading) {
            return (
                <View>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View>
                <Text>
                    Projects
                </Text>

                <FlatList
                    data={projects}
                    renderItem={({ item }) =>
                        <Content contentContainerStyle={styles.content}>
                            <Image style={styles.image} source={require('../assets/images/robot-prod.png')} />
                            <Text style={styles.text}> {item.title} </Text>
                        </Content>
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>
        );
    }
}

SideBar.propTypes = {
    name: PropTypes.string,
    loading: PropTypes.bool,
    projects: PropTypes.array,
    language: PropTypes.string,
    getSocialProjects: PropTypes.func
};

const styles = StyleSheet.create({
    content: {
        alignItems: 'flex-start'
    },

    title: {
        alignItems: 'flex-start'
    },

    image: {
        width: 50,
        height: 50,
        alignItems: 'center'
    }
});

const mapStateToProps = ({ faculty, language }) => ({
    name: faculty.name,
    loading: faculty.loading,
    projects: faculty.socialProjects,
    language: language.selection
});

const mapDispatchToProps = {
    getSocialProjects
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);