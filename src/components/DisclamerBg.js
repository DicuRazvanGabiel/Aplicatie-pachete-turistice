import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class DisclamerRo extends Component {
    render() {
      return (
        <View style={[styles.container, this.props.style]}>
          <Text style={styles.Disclaimer}>
            www.interregrobg.eu{"\n"} Съдържанието на това приложение не представлява непременно официалната позиция на Европейския Съюз. Инициаторите на  приложението са единствено отговорни за информацията, предоставена чрез сайта.
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
      height: 70
    },
    Disclaimer: {
      width: 303,
      height: 70,
      color: "#121212",
      fontSize: 11,
    },
    ImgNatbiot: {
      width: 70,
      height: 66
    }
  });