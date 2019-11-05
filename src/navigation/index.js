import { createAppContainer, createSwitchNavigator } from "react-navigation";

import ChooseLangScreen from "../screens/ChooseLang"
import MainScreenContainer from "../screens/MainScreenContainer"
import TestRedux from "../../screens/TestRedux"

const langNavigator = createSwitchNavigator({
    ChooseLangScreen,
    MainScreenContainer,
    TestRedux
}, {
    initialRouteName: 'TestRedux',
    headerMode: 'none'
})

const AppContainer  = createAppContainer(langNavigator);

export default AppContainer;