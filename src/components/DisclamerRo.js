import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class DisclamerRo extends Component {
    render() {
      return (
        <View style={[styles.container, this.props.style]}>
          <Text style={styles.Disclaimer}>
            www.interregrobg.eu{"\n"} Conținutul acestei aplicatii nu reprezintă
            în mod necesar poziția oficiala a Uniunii Europene.Iniţiatorii
            aplicatiei sunt singurii responsabili de informaţiile prezentate în
            aplicatie.
          </Text>
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
      justifyContent: 'space-around',
      width: '100%',
      height: 60
    },
    Disclaimer: {
      width: 303,
      height: 60,
      color: "#121212",
      fontSize: 11,
    },
    ImgNatbiot: {
      width: 70,
      height: 66
    }
  });