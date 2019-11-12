import React from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { View, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { useScreens } from 'react-native-screens';

//redux import
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import packagesReducers from "./store/reducers/packages";
import langugeReducer from "./store/reducers/languge";
import locationReducer from "./store/reducers/location"
//end

import { setLocation } from "./store/actions/location";

import Header from './components/Header'
import Disclaimer from './components/Disclaimer'

import AppContainer from "./navigation";

useScreens();

const rootReducer = combineReducers({
  packages: packagesReducers,
  language: langugeReducer,
  location: locationReducer
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
    isLoadingComplete: false,
    location: null,
    errorMessage: null,
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
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

    if(this.state.location){
      store.dispatch(setLocation(this.state.location));
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
