import React from 'react';
import {View, Card, Icon, Button, Text} from 'native-base';
import PropTypes from 'prop-types';
import facultyStyles from '../../constants/SpecificStyles';

class IconButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {name,icon, label, action} = this.props;

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
        fontSize: 22
    },

    icon: {
        transform: [{
            rotate: '315deg'
        }]
    },

    linkBtn: {
        width: 90,
        height: 90,
        justifyContent: 'center',
        borderWidth: 1.2,
        borderRadius: 6,
        backgroundColor: 'white',
        transform: [{
            rotate: '45deg'
        }]
  
    }
};