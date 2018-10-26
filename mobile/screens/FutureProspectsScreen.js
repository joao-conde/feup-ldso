import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, View, Text, H1 } from 'native-base';
import { connect } from 'react-redux';
import { getFutureProspects } from '../reducers/modules/facultyReducer';

class FutureProspectsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      banner: require('../assets/images/banners/feup-banner.png')
    };
  }

  componentDidMount() {
    this.props.getFutureProspects(this.props.name);
  }

  render() {
    const { name, loading, prospects } = this.props;

    if (loading) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }
    return (
      <Container style={styles.container}>
        <Content contentContainerStyle={styles.content} >
          <H1>What is {name} planning?</H1>

          <Image
            source={this.state.banner}
            style={styles.images}
          />

          <Text style={styles.text}>
            {prospects}
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
});

const mapStateToProps = ({ faculty }) => ({
  name: faculty.name,
  loading: faculty.loading,
  prospects: faculty.futureProspects
});

const mapDispatchToProps = {
  getFutureProspects
};

export default connect(mapStateToProps, mapDispatchToProps)(FutureProspectsScreen);