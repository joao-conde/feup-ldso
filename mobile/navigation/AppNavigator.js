import React from 'react';
import { createStackNavigator } from 'react-navigation';

import MenuScreen from '../screens/MenuScreen';
import FacultyScreen from '../screens/FacultyScreen';
import VideosScreen from '../screens/VideosScreen';
import FutureProspectsScreen from '../screens/FutureProspectsScreen';
import LocalizationScreen from '../screens/LocalizationScreen';
import LanguageBtn from '../components/LanguageBtn';
import { facultyStyles, invertedMode } from '../constants/SpecificStyles';
import HeaderTitle from './components/HeaderTitle';
import SocialProjectsScreen from '../screens/SocialProjectsScreen';
import ResearchCentresScreen from '../screens/ResearchCentresScreen';

export default createStackNavigator(
    {
        Menu: {
            screen: MenuScreen
        },
        Faculty: {
            screen: FacultyScreen
        },
        Videos: {
            screen: VideosScreen
        },
        SocialProjects: {
            screen: SocialProjectsScreen
        },
        ResearchCentres: {
            screen: ResearchCentresScreen
        },
        FutureProspects: {
            screen: FutureProspectsScreen
        },
        Localization: {
            screen: LocalizationScreen
        }
    },
    {
        initialRouteName: 'Menu',
        navigationOptions: ({ navigation }) => {
            const faculty = navigation.getParam('name');
            const inverted = invertedMode[faculty] || false;

            return ({
                headerRight: (
                    <LanguageBtn invertedMode={ invertedMode[faculty] }/>
                ),
                headerTitle: <HeaderTitle faculty={ faculty } invertedMode={ inverted }/>,
                headerStyle: faculty == undefined ? {} : facultyStyles[faculty].header,
                headerTitleStyle: faculty == undefined ? {} : facultyStyles[faculty].headerTitle,
                headerTintColor: inverted ? 'white' : 'black'
            });
        }
    }
);
