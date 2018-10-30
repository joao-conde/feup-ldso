import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { toggleLanguage } from '../reducers/modules/languageReducer';

class LanguageBtn extends React.Component {
    render() {
        const { language, invertedMode } = this.props;

        return (
            <Button transparent light={invertedMode} dark={!invertedMode} onPress={ () => this.props.toggleLanguage()}>
                <Text style={styles.button}>{language}</Text>
            </Button>
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
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageBtn);
