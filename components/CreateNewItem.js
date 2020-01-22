import React, { useState } from "react";
import Color from "../constants/Colors";
import {
  FlatList,
  Image,
  View,
  StyleSheet,
  Platform,
  Linking,
  TouchableOpacity
} from "react-native";
import { useSelector } from "react-redux";
import {
  Container,
  Header,
  Content,
  ListItem,
  CheckBox,
  Text,
  Body,
  Footer,
  FooterTab,
  Button
} from "native-base";
import { getDistance } from "geolib";

const CreateNewItem = ({
  item,
  userLocation,
  navigation,
  addRoot,
  removeFromRoot
}) => {
  const scheme = Platform.select({ ios: "maps:0,0?q=", android: "geo:0,0?q=" });
  const [check, setCheck] = useState(false);
  let distance = null;
  if (userLocation) {
    distance = getDistance(
      { latitude: item.latitudine, longitude: item.longitudine },
      {
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude
      }
    );
  }

  const lat = item.latitudine;
  const lng = item.longitudine;
  const latLng = `${lat},${lng}`;
  const label = item.title;
  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`
  });

  if (check) {
    addRoot(item);
  } else {
    removeFromRoot(item);
  }

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ObjectiveDetail", {
          objectiv: item
        });
      }}
    >
      <View style={styles.containerCard}>
        <View style={{ height: 100, width: 100 }}>
          {item.imageObiectiv[0] ? (
            <Image
              style={{ height: 90, width: 90 }}
              source={{ uri: item.imageObiectiv[0].imageUrl }}
              resizeMode="contain"
            />
          ) : (
            <Text>Image</Text>
          )}
          {/* <Image
                style={{ height: 90, width: 90 }}
                source={{ uri: item.imageObiectiv[0].imageUrl }}
                resizeMode="contain"
              /> */}
        </View>
        <View style={styles.containerText}>
          <Text>{item.title}</Text>
          {userLocation ? <Text>{distance / 1000} KM</Text> : <Text></Text>}
        </View>

        <View style={styles.cotumeButton}>
          <CheckBox checked={check} onPress={() => setCheck(!check)} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    padding: 5,
    flexDirection: "row",
    margin: 5,
    borderColor: Color.darkGreen,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between"
  },
  containerText: {
    margin: 5,
    fontSize: 30,
    maxWidth: 150
  },
  cotumeButton: {
    padding: 5,
    margin: 5,
    marginRight: 10
  },
  textButtonView: {
    color: "white"
  }
});

export default CreateNewItem;
