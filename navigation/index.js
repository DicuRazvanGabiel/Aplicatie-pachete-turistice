import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import LanguageSelectScreen from "../screens/LanguageSelect";
import PeckagesScreen from "../screens/Peckages";
import PeckageDetailScreen from "../screens/PeckageDetailScreen";
import ObjectiveList from "../screens/ObjectiveList";
import ObjectiveDetail from "../screens/ObjectiveDetail";
import SearchObjective from "../screens/SearchObjective"
import RezervationForm from "../screens/RezervationForm"

const packegNavigator = createStackNavigator(
  {
    LanguageSelectScreen,
    PeckagesScreen,
    PeckageDetailScreen,
    ObjectiveList,
    ObjectiveDetail,
    RezervationForm
  },
  {
    initialRouteName: "LanguageSelectScreen",
    headerMode: "none"
  }
);

const drawer = createDrawerNavigator({
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
  }
},{
  edgeWidth: 0
});

const AppContainer = createAppContainer(drawer);

export default AppContainer;
