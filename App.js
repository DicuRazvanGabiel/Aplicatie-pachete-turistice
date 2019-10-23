import React from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { View, StyleSheet, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


import AppContainer from './src/navigation';
import { white } from 'ansi-colors';

const images = [
  require('./assets/images/01_NATBIOT_CMYK.png'),
  require('./assets/images/Interreg_ro.jpg'),
  require('./assets/images/eu.png'),
  require('./assets/images/Logo-BgGov_ro.jpg'),
  require('./assets/images/guvern.png'),
  require('./assets/images/Background.png'),
  require('./assets/images/Background1.png'),
  require('./assets/images/mrc.png'),
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

    return (
      <Container>
        <View style={{height: 100, width: '100%', flexDirection: "row", alignItems: "stretch", justifyContent: "space-between"}}>
          <Image
            source={require("./assets/images/eu.png")}
            style={{
              height: 50,
              width: 110,
              marginLeft: 5,
              marginRight: 5,
              marginTop: 35,
              resizeMode: 'stretch'
            }}
          />
          <Image
            source={require("./assets/images/guvern.png")}
            style={styles.image}
          />
          <Image
            source={require("./assets/images/Interreg_ro.jpg")}
            style={styles.image}
          />
          <Image
            source={require("./assets/images/mrc.png")}
            style={styles.image}
          />
        </View>
        <AppContainer />
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 80,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    resizeMode: 'contain'
  }
});