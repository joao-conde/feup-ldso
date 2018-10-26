import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, Card, Text, Body, H1, Button, Icon, View } from "native-base";
import { connect } from 'react-redux';
import { getIntroduction, setFaculty } from '../reducers/modules/facultyReducer';
import { logos } from '../constants/Logos';

class FacultyScreen extends React.Component {

  componentDidMount() {
    const faculty = this.props.navigation.getParam('faculty');

    this.props.setFaculty(faculty);
    this.props.getIntroduction(faculty);
  }

  render() {
    const { name, loading, intro } = this.props;

    if (loading) {
      return (
        <Container style={styles.container}>
          <Content contentContainerStyle={styles.content}>
            <Text style={styles.text}>
              Wait a little bit... Loading information..
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
              <Text style={styles.labelText}>Videos</Text>
            </Card>
            {/*Social Impact Projects link*/}
            <Card style={styles.icon} transparent>
              <Button style={styles.linkBtn} rounded onPress={() => this.props.navigation.navigate('SocialProjects', {
                name: name
              })}>
                <Icon type="FontAwesome" name="globe" />
              </Button>
              <Text style={styles.labelText}>Social Impact</Text>
            </Card>
            {/*Future Prospects link*/}
            <Card style={styles.icon} transparent>
              <Button style={styles.linkBtn} rounded onPress={() => this.props.navigation.navigate('FutureProspects', {
                name: name
              })}>
                <Icon type="FontAwesome" name="paper-plane" />
              </Button>
              <Text style={styles.labelText}>Future Prospects</Text>
            </Card>
            {/*Localization link*/}
            <Card style={styles.icon} transparent>
              <Button style={styles.linkBtn} rounded onPress={() => this.props.navigation.navigate('Localization', {
                name: name
              })}>
                <Icon type="FontAwesome" name="map-marker" />
              </Button>
              <Text style={styles.labelText}>Localization</Text>
            </Card>
          </Body>

        </Content>
      </Container>
    );
  }
}


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

const mapStateToProps = ({ faculty }) => ({
  name: faculty.name,
  loading: faculty.loading,
  intro: faculty.intro
});

const mapDispatchToProps = {
  setFaculty,
  getIntroduction
};

export default connect(mapStateToProps, mapDispatchToProps)(FacultyScreen);
