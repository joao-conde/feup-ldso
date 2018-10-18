import { createStackNavigator } from 'react-navigation';

import MenuScreen from '../screens/MenuScreen';
import FacultyScreen from '../screens/FacultyScreen';
import VideosScreen from '../screens/VideosScreen';
import SocialProjectsScreen from '../screens/SocialProjectsScreen';
import FutureProspectsScreen from '../screens/FutureProspectsScreen';
import LocalizationScreen from '../screens/LocalizationScreen';

export default createStackNavigator({
  Menu: MenuScreen,
  Faculty: FacultyScreen,
  Videos: VideosScreen,
  SocialProjects: SocialProjectsScreen,
  FutureProspects: FutureProspectsScreen,
  Localization: LocalizationScreen
}, {
  initialRouteName: 'Menu'
});
