import React, {Component} from 'react';
import { StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import { Container, Content, Text, View, Icon } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getIntroduction, setFaculty } from '../reducers/modules/facultyReducer';
import Statistics from '../components/FacultyScreen/StatsNumbers';
import IconButton from '../components/FacultyScreen/IconButton';
import StatsIcons from '../components/FacultyScreen/StatsIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { HexGrid, Layout, Hexagon, HexText, Pattern, HexPath, Hex } from '../components/FacultyScreen/Hexagon/index';


let scrollYPos = 0;

class FacultyScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            screenHeight: Dimensions.get('window').height-80,      
            screenWidth: Dimensions.get('window').width,
        };
    }

    scrollToSecondPage = () => {
        scrollYPos = this.state.screenHeight * 1;
        this.scroller.scrollTo({x: 0, y: scrollYPos});
    };

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

    navigateFunction(label, name) {
        return () => this.props.navigation.navigate(label, {name: name});
    }

    render() {
        const { name, loading, language } = this.props;

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
            <ScrollView style={styles.container} ref={(scroller) => {this.scroller = scroller;}}>
                <Content contentContainerStyle={styles.content}>
                    <View style={styles.menu}>
                        <View style={styles.links}>
                            <View style={styles.linksRow}>
                                <IconButton name={name} icon="film" label="Videos" action={() => this.navigateFunction('Videos', name)}></IconButton>
                                <IconButton name={name} icon="globe" label="Social Projects" action={() => this.navigateFunction('SocialProjects', name)}></IconButton>
                            </View>
                            <View style={styles.linksRow}>
                                <IconButton name={name} icon="paper-plane" label="Future" action={() => this.navigateFunction('FutureProspects', name)}></IconButton>
                                <IconButton name={name} icon="map-marker" label="Localization" action={() => this.navigateFunction('Localization', name)}></IconButton>
                            </View>
                        </View>
                        <View style={styles.imageView}>
                            <Image style={styles.image} source={{uri: 'https://static.globalnoticias.pt/jn/image.aspx?brand=JN&type=generate&guid=151d9c4c-8a02-466b-95fe-1ae900791412&w=744&h=495&t=20180406133500'}}/>
                        </View>
                    </View>
                    <View style={styles.firstPageBottom}>
                        <View style={styles.statistics}>
                            <Statistics course={[ '13', 'Faculdades' ]} students={['2221', 'Estudantes']}></Statistics>
                            <Statistics course={[ '28', 'Mestrados' ]} students={['961', 'Estudantes']}></Statistics>
                            <Statistics course={[ '8', 'Doutoramentos' ]} students={['280', 'Estudantes']}></Statistics>
                            <Statistics course={[ '125', 'Cursos de Formação' ]} students={['1111', 'Formandos']}></Statistics>
                        </View>
                        <TouchableOpacity style={styles.goDownArrow} onPress={this.scrollToSecondPage}>
                            <Icon style={styles.goDownArrowIcon} type="FontAwesome" name="chevron-down" />
                        </TouchableOpacity>
                    </View>
                </Content>
                <Content contentContainerStyle={styles.content}>
                    <View style={styles.statsIcons}>
                        <StatsIcons icon="graduation-cap" iconsNmb={50} percentage={50} text="Docentes e investigadores"></StatsIcons>
                        <StatsIcons icon="user" iconsNmb={80} percentage={90} text="Estudantes estrangeiros"></StatsIcons>
                        <StatsIcons icon="circle" iconsNmb={70} percentage={90} text="Programas de formação conferente de grau envolvendo UO's"></StatsIcons>
                    </View>
                    <View style={styles.hexagonsView}>
                        <HexGrid width={hp('100%')} height={hp('70%')} viewBox="-40 -40 100 100">
                            <Layout size={{ x: 15, y: 15 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }} style={{backgroundColor: 'blue'}}>
                                <Hexagon q={0} r={0} s={0} fill="#fff"/>
                                    <HexText x="0" y="0" fontSize={wp('0.5%')}>240 protocolos de estagio com empresas</HexText>
                                <Hexagon q={0} r={-1} s={1} fill="#fff">
                                    <HexText>0, -1, 1</HexText>
                                </Hexagon>
                                <Hexagon q={1} r={-1} s={0} fill="#fff">
                                    <HexText style={{color: 'white'}}>1, -1, 0</HexText>
                                </Hexagon>
                                <Hexagon q={2} r={-2} s={0} fill="#fff">
                                    <HexText style={{color: 'white'}}>2, -2, 0</HexText>
                                </Hexagon>
                                <Hexagon q={-1} r={0} s={1} fill="#fff">
                                    <HexText>-1, 0, 1</HexText>
                                </Hexagon>
                                <Hexagon q={-2} r={0} s={1} fill="#fff">
                                    <HexText>-2, 0, 1</HexText>
                                </Hexagon>
                                <HexPath start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} />
                            </Layout>
                        </HexGrid>
                    </View>
                </Content>
            </ScrollView>
        );
    }
}

FacultyScreen.propTypes = {
    name: PropTypes.string,
    loading: PropTypes.bool,
    language: PropTypes.string,
    navigation: PropTypes.object,
    setFaculty: PropTypes.func,
    getIntroduction: PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: 'white',
        
    },

    content: {
        flexDirection: 'column',
        height: Dimensions.get('window').height-hp('10.6%'),
        justifyContent: 'center',
        padding:0
    },

    menu: {
        flex:2,
        flexDirection: 'row',
    },

    firstPageBottom: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#1c1c1c'
    },

    statistics: {
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    goDownArrow: {
        flex:1,
        alignItems: 'center'
    },

    goDownArrowIcon: {
        color: 'white'
    },

    image: {
        flex: 1,
        margin: hp('5%'),
        marginBottom: hp('7%'),
        resizeMode: 'contain',
        alignSelf: 'stretch'

    },

    imageView: {
        flex: 3,
    },

    text: {
        textAlign: 'justify',
        padding: hp('4%')
    },

    links: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: hp('1%')
    },

    linksRow: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },

    statsIcons: {
        flex:9,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        padding: hp('3%')
    },

    hexagonsView: {
        flex:11,
        backgroundColor: '#1c1c1c',
        alignItems: 'center',
        paddingTop: hp('5%')
    },
    hexagon: {
        color: '#7be3f6'
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
