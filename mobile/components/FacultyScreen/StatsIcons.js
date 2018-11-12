import React from 'react';
import {View} from 'react-native';
import {Text, Icon} from 'native-base';
import PropTypes from 'prop-types';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class StatisticsNumbers extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {icon, iconsNmb,  percentage, text} = this.props;
        
        var icons = [];
        let colored = 0;

        for(let i = 0; i < iconsNmb; i++) {

            if(colored < (iconsNmb*percentage/100)) {
                icons.push(
                    <Icon key={i} style={styles.icon} type="FontAwesome" name={icon}/>
                );
                colored++;
            } else {
                icons.push(
                    <Icon key={i} style={styles.backgroundIcon} type="FontAwesome" name={icon}/>
                );
            }
        }    

        return (
            <View style={styles.main}>
                <View style={[styles.section, styles.justify]}>
                    {icons}
                </View>
                <View style={[styles.section, styles.percentageContent]}>
                    <Text style={styles.percentage}>{percentage}%</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.description}>{text}</Text>
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
        padding: wp('1%'),
        paddingBottom: hp('0.5%'),
        alignItems: 'center',
        justifyContent: 'center',
    },

    section: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },

    justify: {
        justifyContent: 'center'
    },

    backgroundIcon: {
        fontSize: hp('9%'),
        padding: hp('0.5%'),
        color: '#cccccc'
    },

    icon: {
        fontSize: hp('9%'),
        padding: hp('0.5%'),
        color: '#1c1c1c'
    },

    percentage: {
        fontFamily: 'Quicksand_regular',
        fontSize: hp('5%'),
        color: 'black',
    },

    percentageContent: {
        paddingTop: hp('23.5%'),
        marginBottom: hp('5%'),
    },

    
    description: {
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Quicksand_regular',
        fontSize: wp('1.6%'),
        textAlign: 'center'

    }

};