import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import LanguageSelectScreen from "../screens/LanguageSelect";
import PeckagesScreen from "../screens/Peckages";
import PeckageDetailScreen from "../screens/PeckageDetailScreen";
import ObjectiveList from "../screens/ObjectiveList";
import ObjectiveDetail from "../screens/ObjectiveDetail";
import SearchObjective from "../screens/SearchObjective";
import RezervationForm from "../screens/RezervationForm";
import AdvantagesNatbiot from "../screens/AdvantagesNatbiot";
import Services from "../screens/Services";
import Settings from "../screens/Settings";
import AuthScreen from "../screens/AuthScreen";
import RegisterScreen from "../screens/RegisterScreen"
import StartupScreenAutoLogin from "../screens/StartupScreenAutoLogin"
import CreateNewRoute from "../screens/CreateNewRoute";
import ViewNewRoute from "../screens/ViewNewRoute"
import HowMuchTime from "../screens/HowMuchTime"

const packegNavigator = createStackNavigator(
  {
    LanguageSelectScreen,
    PeckagesScreen,
    PeckageDetailScreen,
    ObjectiveList,
    ObjectiveDetail,
    CreateNewRoute,
    RezervationForm,
    ViewNewRoute
  },
  {
    initialRouteName: "LanguageSelectScreen",
    headerMode: "none"
  }
);

const drawer = createDrawerNavigator(
  {
    PrezentarePachete: {
      screen: packegNavigator,
      navigationOptions: ({ navigation }) => ({
        title: `Pachete Natbiot`
      })
    },
    SearchObjective: {
      screen: SearchObjective,
      navigationOptions: ({ navigation }) => ({
        title: `Cautare`
      })
    },
    AdvantagesNatbiot: {
      screen: AdvantagesNatbiot,
      navigationOptions: ({ navigation }) => ({
        title: `Avantaje Natbiot`
      })
    },
    HowMuchTime: {
      screen: HowMuchTime,
      navigationOptions: ({ navigation }) => ({
        title: `Cum ajung si cat dureaza?`
      })
    },
    Services: {
      screen: Services,
      navigationOptions: ({ navigation }) => ({
        title: `Cazare / Masa`
      })
    },
    Settings: {
      screen: Settings,
      navigationOptions: ({ navigation }) => ({
        title: `Setari`
      })
    },
  },
  {
    edgeWidth: 0
  }
);

const authNavigator = createSwitchNavigator({
  StartupScreenAutoLogin,
  AuthScreen,
  RegisterScreen,
  MainApplication: drawer
})

const AppContainer = createAppContainer(authNavigator);

export default AppContainer;
