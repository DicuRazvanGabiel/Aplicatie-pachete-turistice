import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ImageScreen from "../screens/noInternet/ImageScreen"

const imageNavigator = createStackNavigator(
    {
        ImageScreen
    },
    {
      initialRouteName: "ImageScreen",
      headerMode: "none"
    }
  );

const noInternetContainer = createAppContainer(imageNavigator);
export default noInternetContainer;