import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from 'native-base';
import { connect } from 'react-redux';
import { toggleLanguage } from '../reducers/modules/languageReducer';

class LanguageBtn extends React.Component {
    render() {
        const { language, invertedMode } = this.props;

        return (
            <TouchableOpacity onPress={ () => this.props.toggleLanguage()}>
                <Text style={[styles.button, invertedMode ? styles.light : styles.dark]}>{language.toUpperCase()}</Text>
            </TouchableOpacity>
        );
    }

}

LanguageBtn.propTypes = {
    language: PropTypes.string,
    toggleLanguage: PropTypes.func,
    invertedMode: PropTypes.bool
};

const mapStateToProps = ({ language }) => ({
    language: language.selection
});

const mapDispatchToProps = {
    toggleLanguage
};

const styles = StyleSheet.create({
    button: {
        fontWeight: 'bold',
        marginRight: 12.5
    },
    light: {
        color: 'white'
    },
    dark: {
        color:'black'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageBtn);
