import React from 'react';
import {View} from 'react-native';
import {Text } from 'native-base';
import PropTypes from 'prop-types';
import Dash from 'react-native-dash';

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
        padding:20,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#1c1c1c'
    },

    section: {
        padding: 3,
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    dash: {
        width:1,
        height:50,
        flexDirection:'column'
    },

    numbers: {
        fontFamily: 'Quicksand_regular',
        fontSize: 30,
        color: 'white',
        paddingBottom: 5
    },

    text: {
        color: 'white',
        fontFamily: 'Quicksand_bold',
        fontSize: 25
    }
};