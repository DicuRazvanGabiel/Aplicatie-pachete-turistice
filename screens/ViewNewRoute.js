import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Button,
  Modal,
  TouchableOpacity,
  Linking
} from "react-native";
import { WebView } from "react-native-webview";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { getCenterOfBounds } from "geolib";
import MapViewDirections from "react-native-maps-directions";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import randomColor from "randomcolor";

import GOOGLE_API_KEY from "../GOOGLE_API_KEY";
import DrawerButton from "../components/DrawerButton";

const ViewNewRoute = ({ navigation }) => {
  let routes = navigation.getParam("routes");
  const currentLocation = useSelector(state => state.location.location);
  const coordsForCenter = [];

  routes.map(object => {
    coordsForCenter.push({
      latitude: parseFloat(object.latitudine),
      longitude: parseFloat(object.longitudine)
    });
  });
  const { latitude, longitude } = getCenterOfBounds(coordsForCenter);
  const region = {
    latitude,
    longitude,
    latitudeDelta: 1.2922,
    longitudeDelta: 1.2421
  };

  function compare(a, b) {
    if (a.order < b.order) {
      return -1;
    }
    if (a.order > b.order) {
      return 1;
    }
    return 0;
  }

  const googleApi = GOOGLE_API_KEY;

  routes.sort(compare);

  const directions = () => {
    if (!currentLocation) return;
    const origin = {
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude
    };

    color = randomColor({
      luminosity: "dark"
    });

    const destination = {
      latitude: parseFloat(routes[routes.length - 1].latitudine),
      longitude: parseFloat(routes[routes.length - 1].longitudine)
    };

    let waypoints = [];
    routes.map(r => {
      waypoints.push({
        latitude: parseFloat(r.latitudine),
        longitude: parseFloat(r.longitudine)
      });
    });

    return (
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={googleApi}
        waypoints={waypoints}
        strokeWidth={3}
        strokeColor={color}
      />
    );
  };

  return (
    <View style={styles.container}>
      <DrawerButton backButton={true} navigation={navigation} />
      <MapView style={styles.mapStyle} region={region} showsUserLocation={true}>
        {directions()}
        {routes.map(object => {
          const latlng = {
            latitude: parseFloat(object.latitudine),
            longitude: parseFloat(object.longitudine)
          };

          return (
            <Marker key={object.id} coordinate={latlng} title={object.title}>
              {object.iconita === 1579445103301 ? (
                <MaterialCommunityIcons name="bridge" size={32} color="black" />
              ) : (
                <View></View>
              )}

              {object.iconita === 1579445113198 ? (
                <MaterialCommunityIcons name="castle" size={32} color="black" />
              ) : (
                <View></View>
              )}

              {/* <MaterialCommunityIcons
                name="bridge"
                size={32}
                color="black"
              /> */}
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});

export default ViewNewRoute;
