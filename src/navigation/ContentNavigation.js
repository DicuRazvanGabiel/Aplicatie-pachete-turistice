import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from "../screens/Login";
import RegisterScreen from "../screens/Register";
import MapScreen from "../screens/Map";
import SettingsScreen from "../screens/Settings";
import PakagesListScreen from "../screens/PackagesList"
import VisitingPoints from "../screens/VisitingPoints"

const mainNavigator = createMaterialBottomTabNavigator({
    MapScreen,
    SettingsScreen
},{
    initialRouteName: 'MapScreen',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
});

const pakagesListNavigation = createStackNavigator({
    LoginScreen,
    RegisterScreen,
    PakagesListScreen,
    VisitingPoints
}, {
    initialRouteName: 'PakagesListScreen',
    headerMode: 'none'
});

const PackegesContainer  = createAppContainer(pakagesListNavigation);

export default PackegesContainer;