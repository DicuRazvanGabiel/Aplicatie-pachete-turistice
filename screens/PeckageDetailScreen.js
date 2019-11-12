import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Button
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { getCenterOfBounds } from "geolib";
import MapViewDirections from "react-native-maps-directions";
import randomColor from "randomcolor";

import GOOGLE_API_KEY from "../GOOGLE_API_KEY";
import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const PeckageDetailScreen = props => {
  const objectivesAvailable = useSelector(state => state.packages.objectives);
  const currentLocation = useSelector(state => state.location.location);

  const packege = props.navigation.getParam("package");
  const listObjectives = [];
  packege.obiective.forEach(element => {
    listObjectives.push(objectivesAvailable[element]);
  });
  const coordsForCenter = [];
  listObjectives.map(object => {
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

  const viewObjectivesHandler = country => {
    props.navigation.navigate("ObjectiveList", {
      listObjectives,
      country
    });
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} region={region} showsUserLocation={true}>
        {listObjectives.map(object => {
          const latlng = {
            latitude: parseFloat(object.latitudine),
            longitude: parseFloat(object.longitudine)
          };
          return (
            <Marker key={object.id} coordinate={latlng} title={object.title} />
          );
        })}

        {listObjectives.map(object => {
          if (object.latitudine === null || currentLocation === null) {
            return;
          }
          const destination = {
            latitude: parseFloat(object.latitudine),
            longitude: parseFloat(object.longitudine)
          };

          const origin = {
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude
          };

          const googleApi = GOOGLE_API_KEY;
          const color = randomColor({
            luminosity: 'dark'
          });

          return (
            <MapViewDirections
              key={object.id * 2}
              origin={origin}
              destination={destination}
              apikey={googleApi}
              strokeWidth={3}
              strokeColor={color}
            />
          );
        })}
      </MapView>

      <ScrollView style={styles.scrollViewButtons}>
        <View style={styles.buttonView}>
          <Button
            title="Obiective Romania"
            onPress={() => viewObjectivesHandler("ro")}
            color={Colors.lightGreen}
          />
        </View>

        <View style={styles.buttonView}>
          <Button
            title="Obiective Bulgaria"
            onPress={() => viewObjectivesHandler("bg")}
            color={Colors.lightGreen}
          />
        </View>
      </ScrollView>
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
    height: Dimensions.get("window").height / 2
  },
  text: {
    fontSize: 20,
    color: "#F0F0F0"
  },
  buttonContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20
  },
  card: {
    elevation: 20,
    backgroundColor: Colors.lightGreen,
    marginHorizontal: 10,
    padding: 20,
    borderColor: Colors.darkGreen,
    borderWidth: 1,
    borderRadius: 5
  },
  scrollViewButtons: {
    width: '90%'
  },  
  buttonView: {
    marginVertical: 5,
  }
});

export default PeckageDetailScreen;
