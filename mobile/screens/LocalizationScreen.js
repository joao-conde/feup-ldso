import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'native-base';
import { connect } from 'react-redux';
import { getLocalization } from '../reducers/modules/facultyReducer';

class LocalizationScreen extends React.Component {

    componentDidMount() {
        this.props.getLocalization(this.props.name);
    }

    render() {
        const { name, loading } = this.props;

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
                <Text>
          Placeholder for Localization Screen of {name}
                </Text>
            </View>
        );
    }
}

LocalizationScreen.propTypes = {
    name: PropTypes.string,
    loading: PropTypes.bool,
    getLocalization: PropTypes.func
};

const mapStateToProps = ({ faculty }) => ({
    name: faculty.name,
    loading: faculty.loading,
    localization: faculty.localization
});

const mapDispatchToProps = {
    getLocalization
};

export default connect(mapStateToProps, mapDispatchToProps)(LocalizationScreen);