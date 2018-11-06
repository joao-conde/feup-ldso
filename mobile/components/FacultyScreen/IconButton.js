import React from 'react';
import {View, Card, Icon, Button, Text} from 'native-base';
import PropTypes from 'prop-types';
import facultyStyles from '../../constants/SpecificStyles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
                        <Icon style={[styles.icon,facultyStyles[name].mainMenuIcon]} type="FontAwesome" name={icon} />
                    </Button>
                </View>
                <View style={styles.subtitle}>
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
        padding: 30,
        alignItems: 'center'
    },

    btnView: {
        flex:1,
        flexDirection: 'column',
    },

    subtitle: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop:83,
    },


    labelText: {
        fontSize: hp('2.5%')
    },

    icon: {
        transform: [{
            rotate: '315deg'
        }]
    },

    linkBtn: {
        height: hp('13%'),
        width: hp('13%'),
        justifyContent: 'center',
        borderWidth: 1.2,
        borderRadius: 6,
        backgroundColor: 'white',
        transform: [{
            rotate: '45deg'
        }]
  
    }
};