import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    StyleSheet,
    FlatList,
    Text
} from 'react-native';
import { connect } from 'react-redux';

import { clearFaculty } from '../reducers/modules/facultyReducer';
import { FacultyButton } from '../components/FacultyButton';
import { logos } from '../constants/Logos';

class MenuScreen extends React.Component {
  static navigationOptions = {
      header: null,
  };

  componentDidMount() {
      this.props.navigation.addListener('willFocus', () => this.props.clearFaculty());
  }

  render() {
      return (
          <View style={styles.container}>
              <Text style={styles.header}>ImpactUP</Text>
        
              <FlatList
                  noColumns={3}
                  data={Object.keys(logos).map(elem => {
                      let obj = {};
                      obj.key = elem;
                      return obj;
                  })}
                  renderItem={({ item }) => (
                      <FacultyButton name={item.key} onPress={() => this.props.navigation.navigate('Faculty', {
                          faculty: item.key.toLowerCase()
                      })} />
                  )} />
          </View>
      );
  }
  
}

MenuScreen.propTypes = {
    navigation: PropTypes.object,
    clearFaculty: PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        fontSize: 55,
        margin: 20
    }
});

const mapDispatchToProps = {
    clearFaculty
};

export default connect(null, mapDispatchToProps)(MenuScreen);
