import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'native-base';
import PropTypes from 'prop-types';
import facultyStyles from '../../constants/SpecificStyles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

class Fact extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {name, info} = this.props;
        
        let nr_display = null;
        let displayText = info;
        let matches = displayText.match(/^(\d+)\s?/); //this regex checks if displayText varible starts with a number
        if (matches != null) {
            displayText = displayText.replace(/^(\d+)\s/, ''); //this regex removes the initial number from displayText variable
            nr_display = <Text style={[styles.number, facultyStyles[name].factText]}>{matches[1]}</Text>;
        }
        return (
            <View style={[styles.fact, facultyStyles[name].factBorder]}>
                <View style={[styles.factContent, facultyStyles[name].factBackground]}>
                    {nr_display}
                    <Text style={[facultyStyles[name].factText, (matches != null ? styles.text : styles.centerText)]}>{displayText}</Text>
                </View>
            </View>
        );
    }
}

Fact.propTypes = {
    name: PropTypes.string,
    info: PropTypes.string,
};


export { Fact };


const styles = StyleSheet.create({
    fact: {
        flex:1,
        borderWidth: 3,
        margin: wp('0.65%'),
        borderRadius: 18,
        borderStyle: 'dotted',
    },
    factContent: {
        flex: 1,
        margin: wp('0.8%'),
        borderRadius: 13,
        elevation:15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    number: {
        flex:1,
        textAlign:'right',
        fontSize: wp('3%'),
        paddingRight: wp('2%'),
    },  
    text: {
        flex:2,
        fontSize: wp('1.3%'),
        paddingRight: wp('2%'),
    },
    centerText: {
        flex:2,
        fontSize: wp('1.3%'),
        textAlign: 'center'
    }
});

