import React from 'react';
import {View} from 'react-native';
import {Text, Icon} from 'native-base';
import PropTypes from 'prop-types';

class StatisticsNumbers extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {icon, iconsNmb,  percentage, text} = this.props;
        
        var backgroundIcons = [];
        var icons = [];
        let colored = 0;

        for(let i = 0; i < iconsNmb; i++) {
            backgroundIcons.push(
                <Icon key={i} style={styles.backgroundIcon} type="FontAwesome" name={icon}/>
            );
            if(colored < (iconsNmb*percentage/100)) {
                icons.push(
                    <Icon key={i} style={styles.icon} type="FontAwesome" name={icon}/>
                );
                colored++;
            }
        }    

        return (
            <View style={styles.main}>
                <View style={[styles.section, styles.justify]}>
                    {backgroundIcons}
                </View>
                <View style={[styles.section, styles.justify]}>
                    {icons}
                </View>
                <View style={[styles.section, styles.percentageContent]}>
                    <Text style={styles.percentage}>{percentage} %</Text>
                </View>
                <View style={styles.section}>
                    <Text adjustsFontSizeToFit style={styles.description}>{text}</Text>
                </View>
            </View>
        );
    }
}

StatisticsNumbers.propTypes = {
    icon: PropTypes.string,
    iconsNmb: PropTypes.number,
    percentage: PropTypes.number,
    text: PropTypes.string
};

export default StatisticsNumbers ;

const styles = {
    main: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        paddingBottom: 2,
    },

    section: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },

    justify: {
        justifyContent: 'flex-start',
        position: 'absolute',
    },

    backgroundIcon: {
        fontSize: 20,
        padding: '1%',
        color: '#727272'
    },

    icon: {
        fontSize: 20,
        padding: '1%',
        color: '#1c1c1c'
    },

    percentage: {
        fontFamily: 'Quicksand_regular',

        fontSize: 40,
        color: 'black',
    },

    percentageContent: {
        paddingTop: '30%',
        marginBottom: '5%',
    },

    
    description: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontFamily: 'Quicksand_regular',
        fontSize: 20,
        textAlign: 'center'

    }

};