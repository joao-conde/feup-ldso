import React from 'react';
import { Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class HeaderTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            darkLogo: require('../../assets/images/impactup.png'),
            whiteLogo: require('../../assets/images/impactup-white.png')
        };
    }

    render() {
        const logo = this.props.invertedMode ? this.state.whiteLogo : this.state.darkLogo;

        return (
            <Image
                source={logo}
                style={styles.image}
            />
        );
    }
}

HeaderTitle.propTypes = {
    invertedMode: PropTypes.bool
};

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 30
    },
});

export default HeaderTitle;
