import React from 'react';

import {
    Image,
    TouchableOpacity
} from 'react-native';

import { logos } from '../constants/Logos';

class FacultyButton extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles['button']} title="" onPress={this.props.onPress}>
                <Image style={styles.image} source={logos[this.props.name].uri} />
            </TouchableOpacity>
        );
    }
}

export { FacultyButton };

const styles = {
    image: {
        flex: 1,
        aspectRatio: 0.9,
        resizeMode: 'contain'
    },
    button: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,1)',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 100,
        maxWidth: 250,
        margin: 15
    }
}
