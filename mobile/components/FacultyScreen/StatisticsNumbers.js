import React from 'react';
import {View} from 'react-native';
import {Text, Title} from 'native-base';
import Dash from 'react-native-dash';

class StatisticsNumbers extends React.Component {
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.section}>
                    <Text style={styles.numbers}>13</Text>
                    <Text style={styles.text}>Licenciaturas</Text>
                </View>
                <View style={styles.section}>
                    <Dash dashColor='white' dashGap={5} style={styles.dash} />
                </View>
                <View style={styles.section}>
                    <Text style={styles.numbers}>2221</Text>
                    <Text style={styles.text}>Estudantes</Text>
                </View>
            </View>
        );
    };
}

export { StatisticsNumbers };

const styles = {
    main: {
        padding:20,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
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
        fontSize: 25,
        color: 'white',
        paddingBottom: 5
    },

    text: {
        color: 'white'
    }
}