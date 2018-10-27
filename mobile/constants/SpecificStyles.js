import {StyleSheet} from 'react-native';
import NestedStyleSheet from 'rn-nested-stylesheet';

const specificStyles = NestedStyleSheet(StyleSheet, {

    feup: {
        container: {
            backgroundColor: 'blue',
            flex: 1,
            alignItems: 'center',
        }
    }




});

export default specificStyles;