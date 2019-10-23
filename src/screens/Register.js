import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import RegisterComponent from "../components/RegisterComponent"

export default class Register extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/Background.png")}
          resizeMode="stretch"
          style={styles.image}
        >
          <RegisterComponent style={styles.loginComponent} />
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
