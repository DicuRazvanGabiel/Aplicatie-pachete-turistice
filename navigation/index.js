import { createAppContainer, createSwitchNavigator } from "react-navigation";

import LanguageSelectScreen from "../screens/LanguageSelect";
import PeckagesScreen from "../screens/Peckages"

const langNavigator = createSwitchNavigator({
    LanguageSelectScreen,
    PeckagesScreen
}, {
    initialRouteName: 'PeckagesScreen',
    headerMode: 'none'
})

const AppContainer  = createAppContainer(langNavigator);

export default AppContainer;