import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import MaterialUnderlineTextbox1 from "../components/MaterialUnderlineTextbox1";
import MaterialUnderlineTextbox2 from "../components/MaterialUnderlineTextbox2";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";

export default class Register extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/Background.png")}
          resizeMode="stretch"
          style={styles.image}
        >
          <View style={styles.rect}>
            <MaterialUnderlineTextbox1
              style={styles.materialUnderlineTextbox1}
            />
            <MaterialUnderlineTextbox2
              style={styles.materialUnderlineTextbox2}
            />
            <MaterialButtonViolet1 style={styles.materialButtonViolet1} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  image: {
    height: 812,
    justifyContent: "center",
    alignSelf: "center"
  },
  rect: {
    height: 335,
    alignItems: "center",
    justifyContent: "center"
  },
  materialUnderlineTextbox1: {
    width: 360,
    height: 43,
    marginBottom: 5
  },
  materialUnderlineTextbox2: {
    width: 360,
    height: 43,
    marginTop: 5,
    marginBottom: 5
  },
  materialButtonViolet1: {
    width: 100,
    height: 36,
    marginTop: 5
  }
});
