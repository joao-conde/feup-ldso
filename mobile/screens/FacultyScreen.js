import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, Card, Text, Body, H1, Button, Icon, View } from "native-base";

import { logos } from '../constants/Logos';
import { FAKE_API_ENDPOINT } from 'react-native-dotenv';

export default class FacultyScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    return fetch(FAKE_API_ENDPOINT + ':3005/' + this.props.navigation.getParam('faculty'))
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          info: responseJson['short-description']
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }


  render() {
    const faculty = this.props.navigation.getParam('faculty');

    if (this.state.isLoading) {
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
            {faculty.toUpperCase()}
          </H1>
          <View>
            <Image style={styles.image} source={logos[faculty.toUpperCase()].uri} />
          </View>
          <Text style={styles.text}>
            {this.state.info}
          </Text>

          <Body style={styles.links}>
            {/*Videos link*/}
            <Card style={styles.icon} transparent>
              <Button style={styles.linkBtn} rounded onPress={() => this.props.navigation.navigate('Videos', {
                faculty: faculty
              })}>
                <Icon type="FontAwesome" name="film" />
              </Button>
              <Text style={styles.labelText}>Videos</Text>
            </Card>
            {/*Social Impact Projects link*/}
            <Card style={styles.icon} transparent>
              <Button style={styles.linkBtn} rounded onPress={() => this.props.navigation.navigate('SocialProjects', {
                faculty: faculty
              })}>
                <Icon type="FontAwesome" name="globe" />
              </Button>
              <Text style={styles.labelText}>Social Impact</Text>
            </Card>
            {/*Future Prospects link*/}
            <Card style={styles.icon} transparent>
              <Button style={styles.linkBtn} rounded onPress={() => this.props.navigation.navigate('FutureProspects', {
                faculty: faculty
              })}>
                <Icon type="FontAwesome" name="paper-plane" />
              </Button>
              <Text style={styles.labelText}>Future Prospects</Text>
            </Card>
            {/*Localization link*/}
            <Card style={styles.icon} transparent>
              <Button style={styles.linkBtn} rounded onPress={() => this.props.navigation.navigate('Localization', {
                faculty: faculty
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
