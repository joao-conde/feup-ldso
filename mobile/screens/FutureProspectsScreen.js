import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, View, Text, H1 } from 'native-base';

import { FAKE_API_ENDPOINT } from 'react-native-dotenv';

export default class FutureProspectsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      banner: require('../assets/images/banners/feup-banner.png')
    };
  }

  componentDidMount() {
    return fetch(FAKE_API_ENDPOINT + ':3005/' + this.props.navigation.getParam('faculty'))
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson['future-prospects']['content'],
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const faculty = this.props.navigation.getParam('faculty').toUpperCase();

    return (
      <Container style={styles.container}>
        <Content contentContainerStyle={styles.content} >
          <H1>What is {faculty} planning?</H1>

          <Image
            source={this.state.banner}
            style={styles.images}
          />

          <Text style={styles.text}>
            {this.state.dataSource}
          </Text>
        </Content>
      </Container>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 50,
    alignItems: 'center'
  },
  images: {
    marginTop: 30,
  },
  text: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingRight: 10,
    paddingLeft: 10,
    maxWidth: 500,
    textAlign: 'justify'
  }
})
