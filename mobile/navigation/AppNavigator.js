import { createStackNavigator } from 'react-navigation';

import MenuScreen from '../screens/MenuScreen';
import MainTabNavigator from './MainTabNavigator';

export default createStackNavigator({
  Main: MainTabNavigator,
  Menu: MenuScreen,
},
{
  initialRouteName: 'Menu'
});