import { createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ViewProjectsScreen from '../screens/ViewProjectsScreen';


export default createBottomTabNavigator({
  Home: HomeScreen,
  Links: LinksScreen,
  Settings: SettingsScreen,
  ViewProjects: ViewProjectsScreen,
});
