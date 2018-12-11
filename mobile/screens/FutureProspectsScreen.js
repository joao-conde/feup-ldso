import React from 'react';
import PropTypes from 'prop-types';
import { material } from 'react-native-typography';
import { ScrollView, View, StyleSheet, Image, Text } from 'react-native';
import ActivityIndicatorView from '../components/ActivityIndicatorView';
import { H1 } from 'native-base';
import { connect } from 'react-redux';
import { getFutureProspects } from '../reducers/modules/facultyReducer';
import { facultyStyles } from '../constants/SpecificStyles';

class FutureProspectsScreen extends React.Component {

    componentDidMount() {
        const { language, name } = this.props;
    
        this.props.getFutureProspects(language, name);
    }

    componentDidUpdate(prevProps) {
        const { language, name } = this.props;

        if (prevProps.language != language)
            this.props.getFutureProspects(language, name);
    }

    render() {
        const { loading, prospects, language, name } = this.props;

        if (loading || !prospects.content)
            return ( <ActivityIndicatorView></ActivityIndicatorView> );

        const content = String(prospects.content);

        let regex = RegExp('(.{'+Math.floor(content.length/2)+',}?\\.)(.*)');
        let matches = content.match(regex);

        const firstColumn = matches[1];
        const secondColumn = matches[2];

        return (
            <View style={styles.container}>
                <View style={[styles.leftContent, facultyStyles[name].bannerBorder]}>
                    <Image
                        source={{uri: prospects.banner}}
                        style={styles.banner}
                    />
                </View>
                <View style={styles.rightContent} >
                    <View style={styles.headerMainContainer}>
                        <View style={styles.headerContainer}>
                            <H1 style={styles.header}>{ language == 'en'? 'Planning the' : 'Planear o '}</H1>
                        </View>
                        <View style={styles.headerContainer2}>
                            <H1 style={styles.header2}>{ language == 'en'? 'future' : 'futuro'}</H1>
                        </View>
                    </View>

                    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.bottomContainer}>
                        <View style={styles.bottomContent}>
                            <Text style={styles.body}>
                                { firstColumn }
                            </Text>
                        </View>
                        <View style={styles.bottomContent2}>
                            <Text style={styles.body}>
                                { secondColumn }
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }

}

FutureProspectsScreen.propTypes = {
    name: PropTypes.string,
    loading: PropTypes.bool,
    prospects: PropTypes.object,
    language: PropTypes.string,
    getFutureProspects: PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 0,
        margin: 0,
        flexDirection: 'row'
    },
    leftContent: {
        backgroundColor: 'white',
        alignSelf: 'center',
        flex: 0.4,
        borderStyle: 'dashed',
        borderWidth: 2,
        borderRadius: 5,
        margin: 10,
        padding: 10
    },
    rightContent: {
        marginRight: -25,
        padding: 0,
        flex: 0.6,
        backgroundColor: '#1c1c1c'
    },
    headerMainContainer: {
        flex: 0.4,
    },
    headerContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        transform: [{rotate: '-10deg'}],
        backgroundColor: 'white',
        marginTop: -55,
        paddingTop: 55,
        paddingLeft: 20,
        marginLeft: -20
    },
    headerContainer2: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#1c1c1c',
        transform: [{rotate: '-10deg'}]
    },
    header: {
        paddingLeft: 10,
        margin: 5
    },
    header2: {
        color: 'white',
        paddingLeft: 50,
        margin: 5
    },
    contentContainer: {
        flex: 0.6,
        backgroundColor: '#1c1c1c',
    },
    banner: {
        flex: 1,
        width: undefined,
        height: 425,

    },
    scrollContainer: {
        flex: 1,
        marginRight: 40
    },
    bottomContainer: {
        margin: 10,
        padding: 20
    },
    bottomContent: {
        alignItems: 'center'
    },
    bottomContent2: {
        alignItems: 'center'
    },
    body: {
        ...material.subheadingObject,
        color: 'white',
        marginVertical: 20,
        marginLeft: 25,
        marginRight: 15,
        fontFamily: 'OpenSans_regular',
        fontSize: 20,
        lineHeight: 30
    }
});

const mapStateToProps = ({ faculty, language }) => ({
    name: faculty.name,
    loading: faculty.loading,
    prospects: faculty.futureProspects,
    language: language.selection
});

const mapDispatchToProps = {
    getFutureProspects
};

export default connect(mapStateToProps, mapDispatchToProps)(FutureProspectsScreen);
