import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';
import { FlatList, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { facultyStyles } from '../constants/SpecificStyles';

class SideBar extends React.Component {

    render() {
        const { projects, faculty } = this.props;

        if (projects.length == 0) {
            return (
                <View>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View>
                <FlatList
                    style={styles.list}
                    data={projects}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity onPress={() => this.props.onProjectSelect(index)} style={styles.button}>
                            <Image style={[styles.icon, facultyStyles[faculty].icon]} source={{uri: item.images[0]}} />
                        </TouchableOpacity>
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>
        );
    }
}

SideBar.propTypes = {
    projects: PropTypes.array,
    faculty: PropTypes.string,
    onProjectSelect: PropTypes.func
};

const styles = StyleSheet.create({
    list: {
        marginTop: 5,
    },

    button: {
        margin: 10,
    },

    title: {
        alignItems: 'flex-start'
    },

    icon: {
        borderWidth: 3,
        width: 75,
        height: 75,
        alignItems: 'center',
        borderRadius: 16
    }
});

const mapStateToProps = ({ faculty, language }) => ({
    faculty: faculty.name,
    loading: faculty.loading,
    language: language.selection
});

export default connect(mapStateToProps, null)(SideBar);