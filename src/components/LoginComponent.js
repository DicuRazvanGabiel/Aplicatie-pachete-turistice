import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialUnderlineTextbox1 from "./MaterialUnderlineTextbox1";
import MaterialUnderlineTextbox2 from "./MaterialUnderlineTextbox2";
import MaterialButtonViolet from "./MaterialButtonViolet";
import MaterialButtonViolet1 from "./MaterialButtonViolet1";

export default class LoginComponent extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <MaterialUnderlineTextbox1 style={styles.materialUnderlineTextbox1} />
        <MaterialUnderlineTextbox2 style={styles.materialUnderlineTextbox2} />
        <MaterialButtonViolet style={styles.materialButtonViolet} />
        <Text style={styles.text}>OR</Text>
        <MaterialButtonViolet1 style={styles.materialButtonViolet1} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  materialUnderlineTextbox1: {
    width: 360,
    height: 43,
    marginBottom: 5,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.2
  },
  materialUnderlineTextbox2: {
    width: 360,
    height: 43,
    marginBottom: 5,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.2
  },
  materialButtonViolet: {
    width: 100,
    height: 36,
    marginTop: 5
  },
  text: {
    color: "#121212",
    marginTop: 10,
    marginBottom: 10,
  },
  materialButtonViolet1: {
    width: 100,
    height: 36
  }
});
