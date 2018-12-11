import React from 'react';
import {View} from 'react-native';
import {Text } from 'native-base';
import PropTypes from 'prop-types';
import Dash from 'react-native-dash';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class StatisticsNumbers extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {course, students} = this.props;

        return (
            <View style={styles.main}>
                <View style={styles.section}>
                    <Text style={styles.numbers}>{course[0]}</Text>
                    <Text style={styles.text}>{course[1]}</Text>
                </View>
                <View style={styles.section}>
                    <Dash dashColor='white' dashGap={5} style={styles.dash} />
                </View>
                <View style={styles.section}>
                    <Text style={styles.numbers}>{students[0]}</Text>
                    <Text style={styles.text}>{students[1]}</Text>
                </View>
            </View>
        );
    }
}

StatisticsNumbers.propTypes = {
    course: PropTypes.array,
    students: PropTypes.array,
};

export default StatisticsNumbers ;

const styles = {
    main: {
        padding:hp('4%'),
        flex: 1,
        flexDirection: 'column'
    },

    section: {
        padding:hp('0.3%'),
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    dash: {
        width:1,
        height:hp('4.8%'),
        flexDirection:'column'
    },

    numbers: {
        fontFamily: 'Quicksand_regular',
        fontSize: wp('2.5%'),
        color: 'white',
        paddingBottom:hp('1%')
    },

    text: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'OpenSans_regular',
        fontSize: wp('1.67%'),
        lineHeight: wp('1.75%'),
    }
};