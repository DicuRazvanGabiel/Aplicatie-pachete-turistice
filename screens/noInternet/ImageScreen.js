import React, {useState, useEffect} from "react";
import { View, Text, ScrollView, Image, AsyncStorage, ActivityIndicator } from "react-native";

const ImageScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);
  let offlineImage = null;

  useEffect(() => {
    offlineImage = AsyncStorage.getItem("offlineImage")
    if(offlineImage !== null){
          setImageUrl(offlineImage)
    }
    console.log(imageUrl)
    setIsLoading(false);
  })

  if(isLoading){
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size='large'/>
        </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: "center", width: "100%" }}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>No internet</Text>
        <ScrollView>
          {/*{imageUrl ? (*/}
          {/*    <View style={{margin: 7, borderColor: 'green',}}>*/}
          {/*      <Image*/}
          {/*          source={{uri: imageUrl}}*/}
          {/*          resizeMode="stretch"*/}
          {/*          style={{ height: 200, width: "100%", borderRadius: 10 }}*/}
          {/*      />*/}
          {/*    </View>*/}
          {/*) : (*/}
          {/*    <View></View>*/}
          {/*)}*/}
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
