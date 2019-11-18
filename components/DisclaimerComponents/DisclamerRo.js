import React, { Component } from "react";
import { Text, StyleSheet, View, Image, Linking } from "react-native";

export default class DisclamerRo extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 11 }} onPress={() => {
            Linking.openURL('http://www.interregrobg.eu');
          }}>www.interregrobg.eu</Text>
          <Text style={styles.Disclaimer}>
            Conținutul acestei aplicaţii nu reprezintă în mod necesar poziția
            oficiala a Uniunii Europene.Iniţiatorii aplicaţiei sunt singurii
            responsabili de informaţiile prezentate în aplicatie.
          </Text>
        </View>
        <Image
          source={require("../../assets/images/01_NATBIOT_CMYK.png")}
          resizeMode="contain"
          style={styles.ImgNatbiot}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: 60
  },
  Disclaimer: {
    width: 303,
    height: 60,
    color: "#121212",
    fontSize: 11
  },
  ImgNatbiot: {
    width: 70,
    height: 66
  }
});
