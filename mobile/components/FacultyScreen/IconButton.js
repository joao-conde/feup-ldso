import React from 'react';
import {View, Card, Icon, Button, Text} from 'native-base';
import specificStyles from '../../constants/SpecificStyles';

class IconButton extends React.Component {
    render() {
        return (
            <Card style={styles.card} transparent>
                <View style={styles.btnView}>
                    <Button style={[styles.linkBtn, specificStyles.mainMenuBtn.feup]} /*onPress={() => this.props.navigation.navigate('Videos', {name: name})}*/>
                        <Icon style={[styles.icon,specificStyles.mainMenuIcon.feup]} type="FontAwesome" name="film" />
                    </Button>
                </View>
                <View style={styles.subtitle}>
                    <Text style={styles.labelText}>Videos</Text>
                </View>
            </Card>
        );
    }
}

export { IconButton };

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
}