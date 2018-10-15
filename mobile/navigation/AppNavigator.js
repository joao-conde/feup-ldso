import { createStackNavigator } from 'react-navigation';

import MenuScreen from '../screens/MenuScreen';
import HomeScreen from '../screens/HomeScreen';
import VideosScreen from '../screens/VideosScreen';
import ViewProjectsScreen from '../screens/ViewProjectsScreen';
//import ProspectsScreen from '../screens/ProspectsScreen';
import LocalizationScreen from '../screens/LocalizationScreen';

export default createStackNavigator({
  Menu: MenuScreen,
  Faculty: HomeScreen,
  Videos: VideosScreen,
  SocialProjects: ViewProjectsScreen,
  //FutureProspects: ProspectsScreen,
  Localization: LocalizationScreen
}, {
  initialRouteName: 'Menu'
});