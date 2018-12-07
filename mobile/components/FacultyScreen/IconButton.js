import React from 'react';
import {View, Card, Button, Text} from 'native-base';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import facultyStyles from '../../constants/SpecificStyles';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SvgUri from 'react-native-svg-uri';
import {homepageIcons} from '../../constants/homepage/homepageIcons';


class IconButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {name, icon, label, action} = this.props;

        if(name == undefined || name == '')
            return null;

        return (
            <Card style={styles.card} transparent>
                <View style={styles.btnView}>
                    <Button style={[styles.linkBtn, facultyStyles[name].mainMenuBtn]} onPress={action()}>
                        <SvgUri width={hp('6.5%')} height={hp('6.5%')} fill={StyleSheet.flatten(facultyStyles[name].mainMenuBtn).borderColor} fillAll={true} style={styles.icon} source={homepageIcons[icon].uri} />
                    </Button>
                </View>
                <View style={[styles.subtitle]}>
                    <Text style={styles.labelText}>{label}</Text>
                </View>
            </Card>
        );
    }
}

IconButton.propTypes = {
    name: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.string,
    action: PropTypes.func
};

export default IconButton;

const styles = {

    card: {
        flex:1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column'
    },

    btnView: {
        flex:100,
        justifyContent: 'space-around'
    },

    subtitle: {
        flex:32,
        justifyContent: 'center',
        flexDirection: 'row',
        
    },


    labelText: {
        fontSize: hp('2.5%'),
        textAlign: 'center',
        flexWrap: 'wrap'
    },

    icon: {
        transform: [{
            rotate: '315deg'
        }],
    },

    linkBtn: {
        height: hp('13.5%'),
        width: hp('13.5%'),
        justifyContent: 'center',
        borderWidth: 2.2,
        borderRadius: 17,
        transform: [{
            rotate: '45deg'
        }],
        elevation: 10
  
    }
};