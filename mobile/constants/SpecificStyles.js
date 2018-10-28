import {StyleSheet} from 'react-native';
import NestedStyleSheet from 'rn-nested-stylesheet';

const specificStyles = NestedStyleSheet(StyleSheet, {

    mainMenuIcon: {
        feup: {
            color: '#9F2D20'
        },

    },

    mainMenuBtn: {
        feup: {
            borderColor: '#9F2D20'
        }
    }

});

export default specificStyles;