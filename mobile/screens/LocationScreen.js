import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { locations } from '../constants/Locations';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import facultyStyles from '../constants/SpecificStyles';

class LocationScreen extends React.Component {

    render() {
        const { name } = this.props;
        const qrcode = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + locations[name].qrcode;
        
        return (
            <View style={styles.container}>
                <View style={styles.mapContainer}> 
                    <Image style={styles.map} source={locations[name].uri} />
                </View>

                <View style={styles.rightSide}>
                    <View style={[styles.box, facultyStyles[name].factBackground]} >
                        <View style={[styles.imageContainer, facultyStyles[name].factBackground]}>
                            <Image style={styles.image} source={{uri: qrcode}}/>
                        </View>
                        
                        <Text style={[styles.textContainer, facultyStyles[name].factText]}> 
                            {this.props.language == 'en' ? 'Scan me with a QR code reader and wait for the camera to detect automatically' 
                                : 'Inicie o leitor de códigos QR e espere que a câmara o detete automaticamente'}
                        </Text>
                    </View>
                </View>

                <View style={[styles.textBox, facultyStyles[name].factBackground]}>
                    <Text style={[styles.text, facultyStyles[name].factText]}>
                        {this.props.language == 'en' ? 'Get to know ' 
                            : 'Venha conhecer a '}
                        {name.toUpperCase()}
                    </Text>
                </View>
            </View>
        );
    }
}

LocationScreen.propTypes = {
    name: PropTypes.string,
    language: PropTypes.string,
};

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        flexDirection: 'row'
    } ,

    mapContainer:  {
        flex: 7.5,
    },

    map: {
        flex: 1,
        width: wp('100%'),
        resizeMode: 'cover'      
    },

    box: {
        width: wp('17%'),
        height: hp('42%'),
        borderRadius: hp('2%'),
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8,
    },

    rightSide: {
        flex: 2.5,
        marginLeft: wp('5%'),
        marginTop: hp('2%'),
        alignItems: 'center'
    },

    imageContainer:  {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        flex: 1,
        resizeMode: 'contain',
        width: wp('12%'),
        
    },

    textBox: {
        position: 'absolute',
        left: wp('2%'),
        top: hp('2%'),
        elevation: 8,
        borderRadius: hp('1%'),
    },

    text: {
        paddingLeft: wp('1.25%'),
        paddingRight: wp('1.25%'),
        paddingBottom: hp('1%'),
        paddingTop: hp('1%'),
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: hp('3%'),
        textAlign: 'center',
        fontFamily: 'Quicksand_regular',
    },

    textContainer: {
        flex: 1,
        paddingLeft: wp('2%'),
        paddingRight: wp('1.5%'),
        paddingBottom: hp('2%'),
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: hp('2.1%'),
        fontFamily: 'OpenSans_regular',
    }

});

const mapStateToProps = ({ faculty, language }) => ({
    name: faculty.name,
    language: language.selection
});

export default connect(mapStateToProps)(LocationScreen);
