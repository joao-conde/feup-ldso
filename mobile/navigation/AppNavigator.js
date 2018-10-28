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
        navigationOptions: () => languageBtn
    },
    Videos: {
        screen: VideosScreen,
        navigationOptions: () => languageBtn
    },
    SocialProjects: {
        screen: SocialProjectsScreen,
        navigationOptions: () => languageBtn
    },
    FutureProspects: {
        screen: FutureProspectsScreen,
        navigationOptions: () => languageBtn
    },
    Localization: {
        screen: LocalizationScreen,
        navigationOptions: () => languageBtn
    }
}, {
    initialRouteName: 'Menu'
});

var languageBtn = ({
    headerRight: (
        <LanguageBtn/>
    )
});
