import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { toggleLanguage } from '../reducers/modules/languageReducer';

class LanguageBtn extends React.Component {
    render() {
        const { language } = this.props;

        return (
            <Button transparent dark onPress={() => this.props.toggleLanguage()}>
                <Text>{language}</Text>
            </Button>
        );
    }
}

LanguageBtn.propTypes = {
    language: PropTypes.string,
    toggleLanguage: PropTypes.func
};

const mapStateToProps = ({ language }) => ({
    language: language.selection
});

const mapDispatchToProps = {
    toggleLanguage
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageBtn);