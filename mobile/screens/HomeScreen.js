import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, H1 } from "native-base";
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { logos } from '../constants/Logos';

import { FAKE_API_ENDPOINT } from 'react-native-dotenv';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
    }
  }

  componentDidMount(){
    return fetch(FAKE_API_ENDPOINT + ':3005/' + this.props.navigation.getParam('name', 'feup'))
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          info: responseJson['short-description']});
      })
      .catch((error) =>{
        console.error(error);
      });
  }


  render() {
    if(this.state.isLoading){
      return(
        <Container style={styles.container}>
          <Content contentContainerStyle={styles.content}>
            <Text style={styles.text}>
              Wait a little bit... Loading information..
            </Text>
          </Content>
        </Container>
      )
    }
    return (
      <Container style={styles.container}>
        <Content contentContainerStyle={styles.content}>
          <H1 style={styles.h1} uppercase={true}> 
              {this.props.navigation.getParam('name', 'feup').toUpperCase()}
          </H1>
          
          <Image style={styles.image} source={require('../assets/images/icon.png')}/> 
 
          <Text style={styles.text}>
            {this.state.info}
          </Text>
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({ 
  container:{
    flex: 1,
    alignItems: 'center',
  },
  content:{
    padding: 10,
    paddingLeft: 15,
    alignItems: 'center',
  },
  h1:{
    padding: 30
  },
  image:{
    margin: 20,
    alignItems: 'center'
  },
  text:{
    textAlign: 'justify',
  },
}); 
