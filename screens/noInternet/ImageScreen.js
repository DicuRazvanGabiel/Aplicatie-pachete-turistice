import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

const ImageScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: "center", width: "100%" }}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>No internet</Text>
        <ScrollView>
          <View style={{margin: 7, borderColor: 'green',}}>
            <Image
              source={require("../../assets/images/noInternet/testImage.jpg")}
              resizeMode="stretch"
              style={{ height: 200, width: "100%", borderRadius: 10 }}
            />
          </View>
          <View style={{margin: 7, borderColor: 'green',}}>
            <Image
              source={require("../../assets/images/noInternet/testImage.jpg")}
              resizeMode="stretch"
              style={{ height: 200, width: "100%", borderRadius: 10 }}
            />
          </View>
          <View style={{margin: 7, borderColor: 'green',}}>
            <Image
              source={require("../../assets/images/noInternet/testImage.jpg")}
              resizeMode="stretch"
              style={{ height: 200, width: "100%", borderRadius: 10 }}
            />
          </View>
          <View style={{margin: 7, borderColor: 'green',}}>
            <Image
              source={require("../../assets/images/noInternet/testImage.jpg")}
              resizeMode="stretch"
              style={{ height: 200, width: "100%", borderRadius: 10 }}
            />
          </View>
          <View style={{margin: 7, borderColor: 'green',}}>
            <Image
              source={require("../../assets/images/noInternet/testImage.jpg")}
              resizeMode="stretch"
              style={{ height: 200, width: "100%", borderRadius: 10 }}
            />
          </View>
          <View style={{margin: 7, borderColor: 'green',}}>
            <Image
              source={require("../../assets/images/noInternet/testImage.jpg")}
              resizeMode="stretch"
              style={{ height: 200, width: "100%", borderRadius: 10 }}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ImageScreen;
