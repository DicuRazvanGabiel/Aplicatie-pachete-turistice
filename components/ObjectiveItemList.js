import React from "react";
import {
  FlatList,
  Image,
  View,
  StyleSheet,
  Platform,
  Linking,
  TouchableOpacity,
  Text,
  AsyncStorage
} from "react-native";
import Color from "../constants/Colors";
import { getDistance } from "geolib";
import { Notifications } from "expo";

const ObjectiveItemList = ({
  item,
  userLocation,
  navigation,
  callBackFunction
}) => {
  const scheme = Platform.select({ ios: "maps:0,0?q=", android: "geo:0,0?q=" });
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

  return (
    <TouchableOpacity
      onPress={async () => {
        if (callBackFunction) {
          await callBackFunction(item);
        }
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
            <Text> </Text>
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
        <View>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(url);
            }}
            style={{ margin: 2 }}
          >
            <View style={styles.cotumeButton}>
              <Text style={styles.textButtonView}>Navigate</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              //https://docs.expo.io/versions/latest/sdk/notifications/#localnotification
              Notifications.cancelAllScheduledNotificationsAsync()

              if(item.inchidereL){
                AsyncStorage.setItem("timeNotifications", item.inchidereL)
              }


            }}
            style={{ margin: 2 }}
          >
            <View style={styles.cotumeButton}>
              <Text style={styles.textButtonView}>Notify Me</Text>
            </View>
          </TouchableOpacity>
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
    backgroundColor: Color.lightGreen,
    padding: 5
  },
  textButtonView: {
    color: "white"
  }
});

export default ObjectiveItemList;
