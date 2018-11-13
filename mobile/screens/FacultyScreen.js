import React, {Component} from 'react';
import { StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import { Container, Content, Text, View, Icon } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getStats, setFaculty } from '../reducers/modules/facultyReducer';
import Statistics from '../components/FacultyScreen/StatsNumbers';
import IconButton from '../components/FacultyScreen/IconButton';
import StatsIcons from '../components/FacultyScreen/StatsIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { HexGrid, Layout, Hexagon, HexText, HexPath, Hex } from '../components/FacultyScreen/Hexagon/index';


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
        const faculty = this.props.navigation.getParam('name');

        this.props.setFaculty(faculty);
        this.props.getStats(this.props.language, faculty);
    }

    componentDidUpdate(prevProps) {
        const { language, name } = this.props;

        if (prevProps.language != language)
            this.props.getStats(language, name);
    }

    navigateFunction(label, name) {
        return () => this.props.navigation.navigate(label, {name: name});
    }

    render() {
        const { name, loading, stats, language } = this.props;
        console.log(stats);
        if (loading) {
            return (
                <Container style={styles.container}>
                    <Content contentContainerStyle={styles.content}>
                        <Text style={styles.text}>
                            {language == 'en' ? 'Loading...' : 'Carregando...'}
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
                            <View style={styles.linksCol}>
                                <IconButton name={name} icon="film" label={language == 'en' ? 'Videos' : 'Vídeos'} action={() => this.navigateFunction('Videos', name)}></IconButton>
                                <IconButton name={name} icon="globe" label={language == 'en' ? 'Social Projects' : 'Projetos Sociais'} action={() => this.navigateFunction('SocialProjects', name)}></IconButton>
                            </View>
                            <View style={[styles.linksCol, styles.search]}>
                                <IconButton name={name} icon="search" label={language == 'en' ? 'Research' : 'Investigação'} action={() => this.navigateFunction('FutureProspects', name)}></IconButton>
                            </View>
                            <View style={styles.linksCol}>
                                <IconButton name={name} icon="paper-plane" label={language == 'en' ? 'Future' : 'Futuro'} action={() => this.navigateFunction('FutureProspects', name)}></IconButton>
                                <IconButton name={name} icon="map-marker" label={language == 'en' ? 'Location' : 'Localização'} action={() => this.navigateFunction('Localization', name)}></IconButton>
                            </View>
                        </View>
                        <View style={styles.imageView}>
                            <Image style={styles.image} source={{uri: 'https://static.globalnoticias.pt/jn/image.aspx?brand=JN&type=generate&guid=151d9c4c-8a02-466b-95fe-1ae900791412&w=744&h=495&t=20180406133500'}}/>
                        </View>
                    </View>
                    <View style={styles.firstPageBottom}>
                        <View style={styles.statistics}>
                            <Statistics course={[ stats['nr_bsc'], language == 'en' ? 'Bachelors' : 'Licenciaturas' ]} students={[stats['bsc_students'], language == 'en' ? 'Students' : 'Estudantes']}></Statistics>
                            <Statistics course={[ stats['nr_msc'], language == 'en' ? 'Masters' : 'Mestrados' ]} students={[stats['msc_students'], language == 'en' ? 'Students' : 'Estudantes']}></Statistics>
                            <TouchableOpacity style={styles.goDownArrow} onPress={this.scrollToSecondPage}>
                                <Icon style={styles.goDownArrowIcon} type="FontAwesome" name="chevron-down" />
                            </TouchableOpacity>
                            <Statistics course={[ stats['nr_phd'], language == 'en' ? 'PhD' : 'Doutoramentos' ]} students={[stats['phd_students'], language == 'en' ? 'Students' : 'Estudantes']}></Statistics>
                            <Statistics course={[ stats['nr_training_course'], language == 'en' ? 'Open and continuing training courses' : 'Cursos livres e de formação contínua' ]} students={[stats['training_course_graduate'], language == 'en' ? 'Students' : 'Estudantes']}></Statistics>
                        </View>
                    </View>
                </Content>
                <Content contentContainerStyle={styles.content}>
                    <View style={styles.statsIcons}>
                        <StatsIcons icon="flask" iconsNmb={10} percentage={stats['research_perc']*100} text={language == 'en' ? 'Teachers and Reseachers' : 'Docentes e investigadores'}></StatsIcons>
                        <StatsIcons icon="globe" iconsNmb={10} percentage={stats['foreign_student_perc']*100} text={language == 'en' ? 'Foreign students in mobility program' : 'Estudantes internacionais em mobilidade'}></StatsIcons>
                        <StatsIcons icon="book" iconsNmb={10} percentage={stats['training_programs_perc']*100} text={language == 'en' ? 'Foreign students enrolled to obtain a degree' : 'Estudantes internacionais inscritos para obtenção de grau'}></StatsIcons>
                    </View>
                    <View style={styles.hexagonsView}>
                        <HexGrid width={hp('100%')} height={hp('70%')} viewBox="-32 -42 95 95">
                            <Layout size={{ x: 15, y: 15 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }} >
                                <Hexagon q={0} r={0} s={0} fill="#fff"/>
                                <HexText fontSize={wp('0.2%')}>Estágios</HexText>
                                <Hexagon q={0} r={-1} s={1} fill="#fff">
                                    <HexText fontSize={wp('0.2%')}>Projetos</HexText>
                                </Hexagon>
                                <Hexagon q={1} r={-1} s={0} fill="#fff">
                                    <HexText fontSize={wp('0.2%')}>Ensino</HexText>
                                </Hexagon>
                                <Hexagon q={2} r={-2} s={0} fill="#fff">
                                    <HexText fontSize={wp('0.2%')}>Tradução</HexText>
                                </Hexagon>
                                <Hexagon q={-1} r={0} s={1} fill="#fff">
                                    <HexText fontSize={wp('0.2%')}>Campanhas</HexText>
                                </Hexagon>
                                <Hexagon q={-2} r={0} s={1} fill="#fff">
                                    <HexText fontSize={wp('0.2%')}>Solidariedade</HexText>
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
    stats: PropTypes.object,
    language: PropTypes.string,
    navigation: PropTypes.object,
    setFaculty: PropTypes.func,
    getStats: PropTypes.func
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
        alignItems: 'center',
        justifyContent:'flex-end'
    },

    goDownArrowIcon: {
        color: 'white',
    },

    image: {
        flex: 1,
        margin: hp('2%'),
        marginRight: hp('3%'),
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
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: hp('2%')
    },

    linksCol: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },

    search: { 
        paddingTop: '20%',
        paddingBottom:'30%'
    },

    statsIcons: {
        flex:9,
        flexDirection: 'row',
        flexWrap: 'nowrap',
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
    stats: faculty.stats,
    language: language.selection
});

const mapDispatchToProps = {
    setFaculty,
    getStats
};

export default connect(mapStateToProps, mapDispatchToProps)(FacultyScreen);
