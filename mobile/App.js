import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { createStore, applyMiddleware } from 'redux';
import {StyleProvider} from 'native-base';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { api } from 'react-native-dotenv';
import rootReducer from './reducers/reducer';
import AppNavigator from './navigation/AppNavigator';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';

const client = axios.create({
  baseURL: api,
  responseType: 'json'
});

const store = createStore(rootReducer, applyMiddleware(axiosMiddleware(client)));

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
          <AppLoading
            startAsync={this._loadResourcesAsync}
            onError={this._handleLoadingError}
            onFinish={this._handleFinishLoading}
          />
      );
    } else {
      return (
        <Provider store={store}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <StyleProvider style={getTheme(platform)}>
              <AppNavigator />
            </StyleProvider>
          </View>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
        return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      await Font.loadAsync({
        ...Icon.Ionicons.font,
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        Quicksand_regular: require("./assets/fonts/Quicksand/Quicksand-Regular.ttf"),
        OpenSans_regular: require("./assets/fonts/Open_Sans/OpenSans-Regular.ttf")
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
