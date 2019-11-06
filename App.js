import React from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

//redux import
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import packagesReducers from "./store/reducers/packages";
import langugeReducer from "./store/reducers/languge";
//end

import Header from './components/Header'
import Disclaimer from './components/Disclaimer'

import AppContainer from "./navigation";

const rootReducer = combineReducers({
  packages: packagesReducers,
  language: langugeReducer
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const images = [
  require("./assets/images/01_NATBIOT_CMYK.png"),
  require("./assets/images/languages/ro.jpg"),
  require("./assets/images/languages/bg.jpg"),
  require("./assets/images/languages/eng.png"),
  require("./assets/images/header/bg/LogoEU.jpg"),
  require("./assets/images/header/bg/Logo-BgGov.jpg"),
  require("./assets/images/header/bg/LogoInterreg_bg.jpg"),
  require("./assets/images/header/bg/mrc.png"),
  require("./assets/images/header/en/LogoEU_en.jpg"),
  require("./assets/images/header/en/Logo-ROGov_en.jpg"),
  require("./assets/images/header/en/Logo-BgGov_en.jpg"),
  require("./assets/images/header/en/Intereg_en.jpg"),
  require("./assets/images/header/en/mrc.png"),
  require("./assets/images/header/ro/LogoEuRoCorecta2.png"),
  require("./assets/images/header/ro/Logo-ROGov_ro.jpg"),
  require("./assets/images/header/ro/Interreg_ro.jpg"),
  require("./assets/images/header/ro/mrc.png")
];

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  handleResourcesAsync = async () => {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.handleResourcesAsync}
          onError={error => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      );
    }

    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Header />
          <AppContainer />
          <Disclaimer />
        </View>
      </Provider>
    );
  }
}
