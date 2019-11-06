import React, { Component } from "react";
import { StyleSheet, View, Image, StatusBar } from "react-native";

export default class HeaderLogosRo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rect}>
          <View style={styles.ImgEU}>
            <Image
              source={require("../../assets/images/header/bg/LogoEU.jpg")}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
          <View style={styles.ImgGuvern}>
            <Image
              source={require("../../assets/images/header/bg/Logo-BgGov.jpg")}
              resizeMode="contain"
              style={styles.image2}
            />
          </View>
          <View style={styles.ImgInterreg}>
            <Image
              source={require("../../assets/images/header/bg/LogoInterreg_bg.jpg")}
              resizeMode="contain"
              style={styles.image3}
            />
          </View>
          <View style={styles.ImgMcr}>
            <Image
              source={require("../../assets/images/header/bg/mrc.png")}
              resizeMode="contain"
              style={styles.image4}
            />
          </View>
        </View>
        <StatusBar animated={false} hidden={false} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      margin: 5
  },
  rect: {
    height: 56,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between"
  },
  ImgEU: {
    width: 110,
    alignSelf: "stretch",
    marginTop: 0
  },
  image: {
    width: 110,
    flex: 1,
    marginTop: 23
  },
  ImgGuvern: {
    width: 50,
    alignSelf: "stretch",
    marginTop: 0
  },
  image2: {
    width: 50,
    height: 40,
    flex: 1,
    marginTop: 23
  },
  ImgInterreg: {
    width: 70,
    alignSelf: "stretch",
    marginTop: 23
  },
  image3: {
    width: 70,
    height: 33
  },
  ImgMcr: {
    width: 38,
    alignSelf: "stretch",
    marginTop: 23
  },
  image4: {
    width: 38,
    height: 38
  }
});