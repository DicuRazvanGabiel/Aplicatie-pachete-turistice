import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Button,
  Modal,
  WebView,
  TouchableOpacity,
  Linking
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { getCenterOfBounds } from "geolib";
import MapViewDirections from "react-native-maps-directions";
import randomColor from "randomcolor";
import { Col, Row, Grid } from "react-native-easy-grid";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import RatingStars from "../components/RatingStars";

import GOOGLE_API_KEY from "../GOOGLE_API_KEY";
import Colors from "../constants/Colors";
import DrawerButton from "../components/DrawerButton";

const PeckageDetailScreen = props => {
  const objectivesAvailable = useSelector(state => state.packages.objectives);
  const currentLocation = useSelector(state => state.location.location);

  const [trailerModalVisibilty, setTrailerModalVisibilty] = useState(false);

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

  const createNewHandler = country => {
    props.navigation.navigate("CreateNewRoute", {
      listObjectives,
      country
    });
  };

  return (
    <View style={styles.container}>
      <DrawerButton navigation={props.navigation} backButton={true} />
      <MapView style={styles.mapStyle} region={region} showsUserLocation={true}>
        {listObjectives.map(object => {
          // console.log(object.iconita);

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

          let color;
          if (object.culoareTraseu) {
            color = object.culoareTraseu;
          } else {
            color = randomColor({
              luminosity: "dark"
            });
          }

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
            title="Creeaza-ti prorpiul traseu"
            onPress={() => createNewHandler("ro")}
            color={Colors.lightGreen}
          />
        </View>
        <Grid>
          <Col>
            <Row>
              <View style={styles.buttonView}>
                <Button
                  title="Obiective Romania"
                  onPress={() => viewObjectivesHandler("ro")}
                  color={Colors.lightGreen}
                />
              </View>
            </Row>
            <Row>
              <View style={styles.buttonView}>
                <Button
                  title="Trailer"
                  onPress={() => {
                    setTrailerModalVisibilty(true);
                  }}
                  color={Colors.lightGreen}
                />
              </View>
            </Row>
          </Col>
          <Col>
            <Row>
              <View style={styles.buttonView}>
                <Button
                  title="Obiective Bulgaria"
                  onPress={() => viewObjectivesHandler("bg")}
                  color={Colors.lightGreen}
                />
              </View>
            </Row>
            <Row>
              <View style={styles.buttonView}>
                <Button
                  title="Rezerva Pachet"
                  onPress={() => {
                    props.navigation.navigate("RezervationForm", {
                      packege
                    });
                  }}
                  color={Colors.lightGreen}
                />
              </View>
            </Row>
          </Col>
        </Grid>
        <View style={styles.buttonView}>
          <Button
            title="Descarca Brosura"
            onPress={() => Linking.openURL(packege.linkBrosura)}
            color="blue"
          />
        </View>
        <View style={styles.ratingTexContainer}>
          <Text style={styles.ratingText}>Rate this package</Text>
        </View>
        <RatingStars />
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={trailerModalVisibilty}
        onRequestClose={() => {
          setTrailerModalVisibilty(false);
        }}
      >
        <View style={styles.containerModal}>
          <TouchableOpacity
            onPress={() => {
              setTrailerModalVisibilty(false);
            }}
          >
            <View style={styles.closeModalImage}>
              <AntDesign name="closecircleo" size={32} color="red" />
            </View>
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <WebView
              source={{
                uri: "https://www.youtube.com/embed/" + packege.idYoutubeVideo
              }}
            />
          </View>
        </View>
      </Modal>
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
    width: "90%"
  },
  buttonView: {
    marginVertical: 5,
    marginHorizontal: 5,
    flex: 1
  },
  containerModal: {
    flex: 1,
    backgroundColor: "black"
  },
  closeModalImage: {
    margin: 5
  },
  ratingTexContainer: {
    margin: 5
  },
  ratingText: {
    fontSize: 20,
    color: "blue"
  }
});

export default PeckageDetailScreen;
