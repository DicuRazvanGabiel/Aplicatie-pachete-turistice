import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import LanguageSelectScreen from "../screens/LanguageSelect";
import PeckagesScreen from "../screens/Peckages"
import PeckageDetailScreen from "../screens/PeckageDetailScreen"


const langNavigator = createStackNavigator({
    LanguageSelectScreen,
    PeckagesScreen,
    PeckageDetailScreen
}, {
    initialRouteName: 'LanguageSelectScreen',
    headerMode: 'none'
})

const AppContainer  = createAppContainer(langNavigator);

export default AppContainer;