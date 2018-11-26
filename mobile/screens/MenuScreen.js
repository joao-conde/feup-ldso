import React from 'react';
import PropTypes from 'prop-types';
import {
    View, Image,
    StyleSheet,
    FlatList,
    Text
} from 'react-native';
import { connect } from 'react-redux';

import { clearFaculty } from '../reducers/modules/facultyReducer';
import { FacultyButton } from '../components/FacultyButton';
import { logos } from '../constants/Logos';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

class MenuScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    componentDidMount() {
        this.props.navigation.addListener('willFocus', () => this.props.clearFaculty());
    }

    render() {
        const logo = require('../assets/images/impactup-white.png');
        const myLogos = Object.assign({'blankElement' : ''}, logos);
                
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.logo}/>

                <FlatList style={styles.list}
                    numColumns={4}
                    data={Object.keys(myLogos).map(elem => {
                        let obj = {};
                        obj.key = elem;
                        return obj;
                    })}
                    renderItem={({ item }) => (

                        item.key == 'blankElement' ? <Text style={styles.elementZero}></Text> :
                            <FacultyButton name={item.key} onPress={() => this.props.navigation.navigate('Faculty', {
                                name: item.key
                            })} />
                    )} />
            </View>
        );
    }
  
}

MenuScreen.propTypes = {
    navigation: PropTypes.object,
    clearFaculty: PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#1c1c1c',
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        fontSize: 55,
        margin: 20
    },

    elementZero: {
        height: hp('18%'),
        width: hp('18%'),
        margin: hp('1%'),
    },
    
    logo: {
        width: hp('25%'),
        minHeight: hp('15%'),
        maxHeight: hp('20%'),
        resizeMode: 'contain',
        marginTop: hp('3%'),
        position: 'absolute',
        right: hp('10%'),
        top: hp('5%'),
        
    },

    list: {
        width: '70%',
        transform: [
            {translateY: hp('25%')},
            {rotate: '45deg'}
        ],
        
    }
});

const mapDispatchToProps = {
    clearFaculty
};

export default connect(null, mapDispatchToProps)(MenuScreen);
