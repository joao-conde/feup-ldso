import React from 'react';
import PropTypes from 'prop-types';

import {
    Image,
    View,
    TouchableOpacity
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { logos } from '../constants/Logos';

class FacultyButton extends React.Component {
    render() {
        return (
            <TouchableOpacity title="" onPress={this.props.onPress}>
                <View style={styles['button']} >
                    <Image style={styles.image} source={logos[this.props.name].uri} />
                </View>
            </TouchableOpacity>
        );
    }
}

FacultyButton.propTypes = {
    onPress: PropTypes.func,
    name: PropTypes.string.isRequired
};

export { FacultyButton };

const styles = {
    
    image: {
        flex: 1,
        aspectRatio: 0.9,
        resizeMode: 'contain',
        transform: [{
            rotate: '315deg'
        }],
    },

    button: {
        height: hp('18%'),
        width: hp('18%'),
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: hp('6%'),
        margin: hp('1%'),
    }
};
