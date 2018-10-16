import { createStackNavigator } from 'react-navigation';

import MenuScreen from '../screens/MenuScreen';
import HomeScreen from '../screens/HomeScreen';
import VideosScreen from '../screens/VideosScreen';
import ViewProjectsScreen from '../screens/ViewProjectsScreen';
import FutureProspectsScreen from '../screens/FutureProspectsScreen';
import LocalizationScreen from '../screens/LocalizationScreen';

export default createStackNavigator({
  Menu: MenuScreen,
  Faculty: HomeScreen,
  Videos: VideosScreen,
  SocialProjects: ViewProjectsScreen,
  FutureProspects: FutureProspectsScreen,
  Localization: LocalizationScreen
}, {
  initialRouteName: 'Menu'
});
