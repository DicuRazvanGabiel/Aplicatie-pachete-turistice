import { createAppContainer, createSwitchNavigator } from "react-navigation";

import ChooseLangScreen from "../screens/ChooseLang"
import MainScreenContainer from "../screens/MainScreenContainer"

const langNavigator = createSwitchNavigator({
    ChooseLangScreen,
    MainScreenContainer
}, {
    initialRouteName: 'ChooseLangScreen',
    headerMode: 'none'
})

const AppContainer  = createAppContainer(langNavigator);

export default AppContainer;