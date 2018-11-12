import React from 'react';
import {View, Card, Icon, Button, Text} from 'native-base';
import PropTypes from 'prop-types';
import facultyStyles from '../../constants/SpecificStyles';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
                        <Icon style={styles.icon} type="FontAwesome" name={icon} />
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
        alignItems: 'center'
    },

    btnView: {
        flexDirection: 'column',
    },

    subtitle: {
        alignItems: 'center'
    },


    labelText: {
        fontSize: hp('2.5%')
    },

    icon: {
        fontSize: hp('6%'),
        transform: [{
            rotate: '315deg'
        }],
        color: 'white'
    },

    linkBtn: {
        height: hp('14%'),
        width: hp('14%'),
        justifyContent: 'center',
        borderWidth: 1.2,
        borderRadius: 6,
        backgroundColor: 'white',
        transform: [{
            rotate: '45deg'
        }],
        elevation: 23
  
    }
};