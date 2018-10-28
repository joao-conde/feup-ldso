import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, Text, View } from "native-base";
import { connect } from 'react-redux';
import { getIntroduction, setFaculty } from '../reducers/modules/facultyReducer';
import { logos } from '../constants/Logos';
import { StatisticsNumbers } from '../components/FacultyScreen/StatisticsNumbers';
import { IconButton } from '../components/FacultyScreen/IconButton';

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
            <View style={styles.menu}>
              <View style={styles.links}>
                <View style={styles.linksRow}>
                  <IconButton></IconButton>
                  <IconButton></IconButton>
                </View>
                <View style={styles.linksRow}>
                  <IconButton></IconButton>
                  <IconButton></IconButton>
                </View>
              </View>
              <View style={styles.imageView}>
                <Image style={styles.image} source={{uri: 'https://static.globalnoticias.pt/jn/image.aspx?brand=JN&type=generate&guid=151d9c4c-8a02-466b-95fe-1ae900791412&w=744&h=495&t=20180406133500'}}/>
              </View>
            </View>
            <View style={styles.statistics}>
              <StatisticsNumbers></StatisticsNumbers>
              <StatisticsNumbers></StatisticsNumbers>
              <StatisticsNumbers></StatisticsNumbers>
              <StatisticsNumbers></StatisticsNumbers>
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
    margin:0
  },

  content: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    margin: 0
  },

  statistics: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
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
