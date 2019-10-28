import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import LoginScreen from "../screens/Login";
import RegisterScreen from "../screens/Register";
import MapScreen from "../screens/Map";
import SettingsScreen from "../screens/Settings";
import ChooseLangScreen from "../screens/ChooseLang"
import PakagesListScreen from "../screens/PackagesList"

const mainNavigator = createMaterialBottomTabNavigator({
    MapScreen,
    SettingsScreen
},{
    initialRouteName: 'MapScreen',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
});

const logInNavigator = createSwitchNavigator({
    ChooseLangScreen,
    LoginScreen,
    RegisterScreen,
    mainNavigator,
    PakagesListScreen
}, {
    initialRouteName: 'ChooseLangScreen',
    headerMode: 'none'
});

const AppContainer  = createAppContainer(logInNavigator);

export default AppContainer;