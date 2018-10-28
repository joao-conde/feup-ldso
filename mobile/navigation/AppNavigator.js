import React from 'react';
import { createStackNavigator } from 'react-navigation';

import MenuScreen from '../screens/MenuScreen';
import FacultyScreen from '../screens/FacultyScreen';
import VideosScreen from '../screens/VideosScreen';
import SocialProjectsScreen from '../screens/SocialProjectsScreen';
import FutureProspectsScreen from '../screens/FutureProspectsScreen';
import LocalizationScreen from '../screens/LocalizationScreen';
import LanguageBtn from '../components/LanguageBtn';

export default createStackNavigator({
  Menu: {
    screen: MenuScreen
  },
  Faculty: {
    screen: FacultyScreen,
    navigationOptions: _ => languageBtn
  },
  Videos: {
    screen: VideosScreen,
    navigationOptions: _ => languageBtn
  },
  SocialProjects: {
    screen: SocialProjectsScreen,
    navigationOptions: _ => languageBtn
  },
  FutureProspects: {
    screen: FutureProspectsScreen,
    navigationOptions: _ => languageBtn
  },
  Localization: {
    screen: LocalizationScreen,
    navigationOptions: _ => languageBtn
  }
}, {
  initialRouteName: 'Menu'
});

var languageBtn = ({
  headerRight: (
    <LanguageBtn/>
  )
});
