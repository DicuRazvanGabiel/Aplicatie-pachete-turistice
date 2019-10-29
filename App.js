import React from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import AppContainer from './src/navigation';

const images = [
  require('./assets/images/01_NATBIOT_CMYK.png'),
  require('./assets/images/Interreg_ro.jpg'),
  require('./assets/images/eu.png'),
  require('./assets/images/Logo-BgGov_ro.jpg'),
  require('./assets/images/guvern.png'),
  require('./assets/images/Background.png'),
  require('./assets/images/Background1.png'),
  require('./assets/images/mrc.png'),
  require('./assets/images/languages/bg.jpg'),
  require('./assets/images/languages/eng.png'),
  require('./assets/images/languages/ro.jpg'),
]

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  }

  handleResourcesAsync = async () => { 

    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.handleResourcesAsync}
          onError={error => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      )
    }

    // return (
    //   <Container>
    //     <HeaderLogosRo />
    //     <View style={{flex: 1}}>
    //       <AppContainer />
    //     </View>
    //     <Disclamer />
    //   </Container>
    // );

    return (
      <View style={{flex:1}}>
        <AppContainer />
      </View>
    );
  }
}