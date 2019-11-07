import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, {Marker} from "react-native-maps";

import { useSelector } from "react-redux";

import Colors from '../constants/Colors'

const PeckageDetailScreen = props => {
    const objectivesAvailable = useSelector(state => state.packages.objectives);
    const packege = props.navigation.getParam('package');
    const listObjectives = [];
    packege.obiective.forEach(element => {
        listObjectives.push(objectivesAvailable[element]);
    });
    
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle}>
          {listObjectives.map( object => {

              const latlng = {
                latitude: parseFloat(object.latitudine),
                longitude: parseFloat(object.longitudine)
              }
              return (<Marker
                key={object.id} 
                coordinate={latlng}
                title={object.title}
                />
              );
          })}
      </MapView>

      <View style={styles.buttonContainer}>
        <View style={styles.card}>
          <Text style={styles.text}>Obiective</Text>
          <Text style={styles.text}>Romania</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.text}>Obiective</Text>
          <Text style={styles.text}>Bulgaria</Text>
        </View>
      </View>
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
    color: '#F0F0F0'
  },
  buttonContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: 'space-around',
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
  }
});

export default PeckageDetailScreen;
