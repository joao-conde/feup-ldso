import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Container, Content, Card, Text, Body, H1, Button, Icon, View } from 'native-base';
import { connect } from 'react-redux';
import { getIntroduction, setFaculty } from '../reducers/modules/facultyReducer';
//import { logos } from '../constants/Logos';


class FacultyScreen extends React.Component {

    componentDidMount() {
        const faculty = this.props.navigation.getParam('faculty');

        this.props.setFaculty(faculty);
        this.props.getIntroduction(this.props.language, faculty);
    }

    componentDidUpdate(prevProps) {
        const { language, name } = this.props;

        if (prevProps.language != language)
            this.props.getIntroduction(language, name);
    }

    render() {
        const { name, loading, intro, language } = this.props;

        if (loading) {
            return (
                <Container style={styles.container}>
                    <Content contentContainerStyle={styles.content}>
                        <Text style={styles.text}>
                            { language == 'en'? 'Loading...' : 'Carregando...' }
                        </Text>
                    </Content>
                </Container>
            );
        }
        return (
            <Container style={styles.container}>
                <Content contentContainerStyle={styles.content}>
                    <H1 style={styles.h1} uppercase={true}>
                        {name}
                    </H1>
                    <View>
                        {/* <Image style={styles.image} source={logos[name.toUpperCase()].uri} /> */}
                    </View>
                    <Text style={styles.text}>
                        {intro}
                    </Text>

                    <Body style={styles.links}>
                        {/*Videos link*/}
                        <Card style={styles.icon} transparent>
                            <Button style={styles.linkBtn} rounded onPress={() => this.props.navigation.navigate('Videos', {
                                name: name
                            })}>
                                <Icon type="FontAwesome" name="film" />
                            </Button>
                            <Text style={styles.labelText}>{language == 'en'? 'Videos' : 'Vídeos'}</Text>
                        </Card>
                        {/*Social Impact Projects link*/}
                        <Card style={styles.icon} transparent>
                            <Button style={styles.linkBtn} rounded onPress={() => this.props.navigation.navigate('SocialProjects', {
                                name: name
                            })}>
                                <Icon type="FontAwesome" name="globe" />
                            </Button>
                            <Text style={styles.labelText}>{language == 'en'? 'Social Impact' : 'Impacto Social'}</Text>
                        </Card>
                        {/*Future Prospects link*/}
                        <Card style={styles.icon} transparent>
                            <Button style={styles.linkBtn} rounded onPress={() => this.props.navigation.navigate('FutureProspects', {
                                name: name
                            })}>
                                <Icon type="FontAwesome" name="paper-plane" />
                            </Button>
                            <Text style={styles.labelText}>{language == 'en'? 'Planning the Future' : 'Planeando o Futuro'}</Text>
                        </Card>
                        {/*Localization link*/}
                        <Card style={styles.icon} transparent>
                            <Button style={styles.linkBtn} rounded onPress={() => this.props.navigation.navigate('Localization', {
                                name: name
                            })}>
                                <Icon type="FontAwesome" name="map-marker" />
                            </Button>
                            <Text style={styles.labelText}>{language == 'en'? 'Localization' : 'Localização'}</Text>
                        </Card>
                    </Body>

                </Content>
            </Container>
        );
    }
}


FacultyScreen.propTypes = {
    name: PropTypes.string,
    loading: PropTypes.bool,
    intro: PropTypes.string,
    language: PropTypes.string,
    navigation: PropTypes.object,
    setFaculty: PropTypes.func,
    getIntroduction: PropTypes.func
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    content: {
        padding: 10,
        alignItems: 'center'
    },

    h1: {
        padding: 30
    },
    image: {
        resizeMode: 'contain',
        maxWidth: 250,
    },

    text: {
        textAlign: 'justify',
        padding: 10
    },

    links: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10
    },

    icon: {
        margin: 100,
        flexDirection: 'column',
        alignItems: 'center'
    },

    linkBtn: {
        flex: 1
    },

    labelText: {
        fontSize: 10
    }
});

const mapStateToProps = ({ faculty, language }) => ({
    name: faculty.name,
    loading: faculty.loading,
    intro: faculty.intro,
    language: language.selection
});

const mapDispatchToProps = {
    setFaculty,
    getIntroduction
};

export default connect(mapStateToProps, mapDispatchToProps)(FacultyScreen);
