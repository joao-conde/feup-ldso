import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, Text, View } from "native-base";
import { connect } from 'react-redux';
import { getIntroduction, setFaculty } from '../reducers/modules/facultyReducer';
import { logos } from '../constants/Logos';
import Statistics from '../components/FacultyScreen/Statistics';
import IconButton from '../components/FacultyScreen/IconButton';

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

  navigateFunction(label, name) {
    return () => this.props.navigation.navigate(label, {name: name});
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
            <View style={styles.menu}>
              <View style={styles.links}>
                <View style={styles.linksRow}>
                  <IconButton icon="film" label="Videos" action={this.navigateFunction.bind(this, "Videos", name)}></IconButton>
                  <IconButton icon="globe" label="Social Projects" action={this.navigateFunction.bind(this, "SocialProjects", name)}></IconButton>
                </View>
                <View style={styles.linksRow}>
                  <IconButton icon="paper-plane" label="Future" action={this.navigateFunction.bind(this, "FutureProspects", name)}></IconButton>
                  <IconButton icon="map-marker" label="Localization" action={this.navigateFunction.bind(this, "Localization", name)}></IconButton>
                </View>
              </View>
              <View style={styles.imageView}>
                <Image style={styles.image} source={{uri: 'https://static.globalnoticias.pt/jn/image.aspx?brand=JN&type=generate&guid=151d9c4c-8a02-466b-95fe-1ae900791412&w=744&h=495&t=20180406133500'}}/>
              </View>
            </View>
            <View style={styles.statistics}>
              <Statistics course={[ "13", "Faculdades" ]} students={["2221", "Estudantes"]}></Statistics>
              <Statistics course={[ "28", "Mestrados" ]} students={["961", "Estudantes"]}></Statistics>
              <Statistics course={[ "8", "Doutoramentos" ]} students={["280", "Estudantes"]}></Statistics>
              <Statistics course={[ "125", "Cursos de Formação" ]} students={["1111", "Formandos"]}></Statistics>
            </View>
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding:0
  },

  content: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    padding:0
  },

  statistics: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1c1c1c'
  },

  menu: {
    flex:2,
    flexDirection: 'row',
  },

  h1: {
    padding: 30
  },

  image: {
    flex: 1,
    margin: 20,
    marginBottom: 37,
    resizeMode: 'contain',
    alignSelf: 'stretch'

  },

  imageView: {
    flex: 3,
  },

  text: {
    textAlign: 'justify',
    padding: 10
  },

  links: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 10
  },

  linksRow: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch'
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
