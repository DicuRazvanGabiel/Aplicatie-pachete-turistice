import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from "react-navigation-drawer";

import LanguageSelectScreen from "../screens/LanguageSelect";
import PeckagesScreen from "../screens/Peckages"
import PeckageDetailScreen from "../screens/PeckageDetailScreen"
import ObjectiveList from "../screens/ObjectiveList"


const langNavigator = createStackNavigator({
    LanguageSelectScreen,
    PeckagesScreen,
    PeckageDetailScreen,
    ObjectiveList
}, {
    initialRouteName: 'LanguageSelectScreen',
    headerMode: 'none'
})

const drawer = createDrawerNavigator({
    PrezentarePachete: {
        screen: langNavigator,
        navigationOptions: ({ navigation }) => ({
            title: `Pachete Natbiot`,
        }),
    }
})

const AppContainer  = createAppContainer(drawer);

export default AppContainer;