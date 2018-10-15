import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text
} from 'react-native';

import { FacultyButton } from '../components/FacultyButton';
import { logos } from '../constants/Logos';

export default class MenuScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.header }>ImpactUP</Text>

        <FlatList
          noColumns={3}
          data={Object.keys(logos).map(elem => {
            let obj = {};
            obj.key = elem;
            return obj;
          })}
          renderItem={({ item, index, separator }) =>
            (
              <FacultyButton name={item.key} onPress={() => this.props.navigation.navigate('Home', {
                name: item.key
              }
              )} />
            )
          }
        />
      </View>
    );
  }
}


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
