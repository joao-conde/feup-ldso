import React, {Component} from 'react';
import { StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import { Container, Content, Text, View, Icon } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getStats, setFaculty } from '../reducers/modules/facultyReducer';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Statistics from '../components/FacultyScreen/StatsNumbers';
import IconButton from '../components/FacultyScreen/IconButton';
import StatsIcons from '../components/FacultyScreen/StatsIcons';
import facultyStyles from '../constants/SpecificStyles';
import {facultyImages} from '../constants/homepage/facultyImages';
import { Fact } from '../components/FacultyScreen/Fact';

class FacultyScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            screenHeight: Dimensions.get('window').height-80,      
            screenWidth: Dimensions.get('window').width,
        };
    }

    scrollToSecondPage = () => {
        this.scroller.scrollTo({x: 0, y: this.state.screenHeight});
    };

    scrollToFirstPage = () => {
        this.scroller.scrollTo({x: 0, y: 0});
    };

    onScroll = (event) => {
        let currentOffset = event.nativeEvent.contentOffset.y;
        let direction = currentOffset > this.offset ? 'down' : 'up';
        this.offset = currentOffset;

        if(direction == 'down')
            this.scrollToSecondPage();
        else
            this.scrollToFirstPage();
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
        function renderFacts() {
            let facts=[];
            if(stats['other_facts'].length == 3 || stats['other_facts'].length == 2) {

                for(let i=0; i<stats['other_facts'].length; i++) {
                    facts.push(<View style={styles.factsColumn} key={i}>
                        {renderInnerFacts([stats['other_facts'][i]])}
                    </View>);
                }
            } else {

                for(let i=0; i<stats['other_facts'].length; i+=2) {
                    facts.push(<View style={styles.factsColumn} key={i}>
                        {i<stats['other_facts'].length-1 ? renderInnerFacts([stats['other_facts'][i], stats['other_facts'][i+1]]): renderInnerFacts([stats['other_facts'][i]])}
                    </View>);

                }
            }
            return facts;
        }

        function renderInnerFacts(facts) {
            let factsDisplay=[];
            for(let i=0; i<facts.length; i++) {
                factsDisplay.push(<Fact name={name} info={facts[i]} key={i}/>);
            }
            return factsDisplay;
        }



        if (loading || typeof facultyStyles[name] == 'undefined') {
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
            <ScrollView style={styles.container} ref={(scroller) => {this.scroller = scroller;}} onMomentumScrollBegin={null} onScrollEndDrag={this.onScroll}>
                <Content contentContainerStyle={styles.content}>
                    <View style={styles.menu}>
                        <View style={styles.links}>
                            <View style={styles.linksCol}>
                                <IconButton name={name} icon="videos" label={language == 'en' ? 'Videos' : 'Vídeos'} action={() => this.navigateFunction('Videos', name)}></IconButton>
                                <IconButton name={name} icon="socialProjects" label={language == 'en' ? 'Social Projects' : 'Projetos Sociais'} action={() => this.navigateFunction('SocialProjects', name)}></IconButton>
                            </View>
                            <View style={[styles.linksCol, styles.search, styles.start]}>
                                <IconButton name={name} icon="research" label={language == 'en' ? 'Research Centres' : 'Centros de Investigação'} action={() => this.navigateFunction('ResearchCentres', name)}></IconButton>
                            </View>
                            <View style={styles.linksCol}>
                                <IconButton name={name} icon="future" label={language == 'en' ? 'Future' : 'Futuro'} action={() => this.navigateFunction('FutureProspects', name)}></IconButton>
                                <IconButton name={name} icon="location" label={language == 'en' ? 'Location' : 'Localização'} action={() => this.navigateFunction('Localization', name)}></IconButton>
                            </View>
                        </View>
                        <View style={styles.imageView}>
                            <Image style={styles.image} source={facultyImages[name].uri}/>
                        </View>
                    </View>
                    <View style={styles.firstPageBottom}>
                        <View style={styles.statistics}>
                            {stats['nr_bsc'] != 0 && <Statistics course={[ stats['nr_bsc'], language == 'en' ? 'Bachelors\n' : 'Licenciaturas\n' ]} students={[stats['bsc_students'], language == 'en' ? 'Students' : 'Estudantes']}></Statistics>}
                            {stats['nr_msc'] != 0 && <Statistics course={[ stats['nr_msc'], language == 'en' ? 'Masters\n' : 'Mestrados\n' ]} students={[stats['msc_students'], language == 'en' ? 'Students' : 'Estudantes']}></Statistics>}
                            {stats['nr_phd'] != 0 && <Statistics course={[ stats['nr_phd'], language == 'en' ? 'PhD\n' : 'Doutoramentos\n' ]} students={[stats['phd_students'], language == 'en' ? 'Students' : 'Estudantes']}></Statistics>}
                            {stats['nr_training_course'] != 0 && <Statistics course={[ stats['nr_training_course'], language == 'en' ? 'Open and continuing training courses\n' : 'Cursos livres e de formação contínua\n' ]} students={[stats['training_course_graduate'], language == 'en' ? 'Students' : 'Estudantes']}></Statistics>}
                        </View>
                        <View style={styles.goArrowView}>
                            <TouchableOpacity style={styles.goDownArrow} onPress={this.scrollToSecondPage}>
                                <Icon style={styles.goDownArrowIcon} type="FontAwesome" name="chevron-down" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Content>
                <Content contentContainerStyle={styles.content}>
                    <View style={styles.stats}>
                        <View style={styles.goArrowView}>
                            <TouchableOpacity style={styles.goUpArrow} onPress={this.scrollToFirstPage}>
                                <Icon type="FontAwesome" name="chevron-up" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.statsIcons}>
                            <StatsIcons icon="flask" iconsNmb={18} percentage={stats['research_perc']*100} text={language == 'en' ? 'Teachers and Reseachers\n\n' : 'Docentes e investigadores\n\n'}></StatsIcons>
                            <StatsIcons icon="globe" iconsNmb={18} percentage={stats['foreign_student_perc']*100} text={language == 'en' ? 'Foreign students in mobility programs\n\n' : 'Estudantes internacionais em mobilidade\n\n'}></StatsIcons>
                            <StatsIcons icon="book" iconsNmb={18} percentage={stats['training_programs_perc']*100} text={language == 'en' ? 'Foreign students enrolled to obtain a degree\n' : 'Estudantes internacionais inscritos para obtenção de grau\n'}></StatsIcons>
                        </View>
                    </View>
                    {stats['other_facts'].length>0 && <View style={styles.factsView}>
                        {renderFacts()}
                    </View>}
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
        height: Dimensions.get('window').height - 80,
        justifyContent: 'center',
        padding:0
    },

    menu: {
        flex:3,
        flexDirection: 'row',
        paddingTop: hp('3%'),
        paddingBottom: hp('3%')
    },

    firstPageBottom: {
        flex:2,
        flexDirection: 'column',
        backgroundColor: '#1c1c1c'
    },

    statistics: {
        flex: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    goArrowView: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    goDownArrow: {
        alignItems: 'center',
        justifyContent:'flex-end'
    },

    goUpArrow: {
        alignItems: 'center',
        justifyContent:'flex-start'
    },

    goDownArrowIcon: {
        color: 'white',
    },

    imageView: {
        flex: 3,
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginRight: wp('2%'),
        backgroundColor:'transparent'
    },

    image: {
        flex: 1,
        resizeMode: 'cover'

    },

    text: {
        textAlign: 'justify',
        padding: hp('4%')
    },

    links: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    linksCol: {
        flex:3,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },

    search: { 
        flex:2,
        paddingTop: '17%',
        paddingBottom:'25%'
        
    },

    start: {
        alignItems: 'flex-start'
    },

    stats: {
        flex:9,
        flexDirection: 'column'
    },

    statsIcons: {
        flex:15,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        padding: hp('3%'),
        paddingTop: hp('0%')
    },

    factsView: {
        flex:8,
        backgroundColor: '#1c1c1c',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },

    factsColumn: {
        flex:1,
        backgroundColor: '#d9d9d9',
        flexDirection: 'column',
        padding: '2%'
    },

    

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
