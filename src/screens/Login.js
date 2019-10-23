import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import LoginComponent from "../components/LoginComponent";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/Background.png")}
          resizeMode="stretch"
          style={styles.image}
        >
          <LoginComponent style={styles.loginComponent} navigation={this.props.navigation}/>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1
  },
  loginComponent: {
    height: 322,
    marginTop: 245
  }
});
