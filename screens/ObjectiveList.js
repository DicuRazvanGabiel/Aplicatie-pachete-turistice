import React, { useState } from "react";
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
  Content,
  Footer,
  FooterTab,
  Button,
  Text
} from "native-base";
import { getDistance } from "geolib";

import Color from "../constants/Colors";
const scheme = Platform.select({ ios: "maps:0,0?q=", android: "geo:0,0?q=" });

const ObjectiveList = props => {
  const [typeObjetivesToShow, setTypeObjetivesToShow] = useState("naturale");
  const objectives = props.navigation.getParam("listObjectives");
  const country = props.navigation.getParam("country");
  const userLocation = useSelector(state => state.location.location);

  const objectivesForCoutry = [];
  objectives.map(objectiv => {
    if (objectiv.tara === country) {
      objectivesForCoutry.push(objectiv);
    }
  });

  const naturalObjectives = [];
  const culturalObjectives = [];

  objectivesForCoutry.map(objectiv => {
    if (objectiv.typeObiectiv === "naturale") {
      naturalObjectives.push(objectiv);
    } else {
      culturalObjectives.push(objectiv);
    }
  });

  const renderObjectiv = itemObj => {
    const { item } = itemObj;

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
      <TouchableOpacity onPress={() => {props.navigation.navigate('ObjectiveDetail',{
        objectiv: item
      })}}>
        <View style={styles.containerCard}>
          <View style={{ height: 100, width: 100 }}>
            <Image
              style={{ height: 90, width: 90 }}
              source={{ uri: item.imageObiectiv[0].imageUrl }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.containerText}>
            <Text>{item.title}</Text>
            {userLocation ? <Text>{distance / 1000} KM</Text> : <Text></Text>}
          </View>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(url);
            }}
          >
            <View style={styles.cotumeButton}>
              <Text style={styles.textButtonView}>Navigate</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const toogleButton = type => {
    setTypeObjetivesToShow(type);
  };

  return (
    <Container>
      <Content>
        <FlatList
          data={
            typeObjetivesToShow === "naturale"
              ? naturalObjectives
              : culturalObjectives
          }
          renderItem={renderObjectiv}
          keyExtractor={item => item.title}
        />
      </Content>
      <Footer>
        <FooterTab>
          <Button
            active={typeObjetivesToShow === "naturale" ? true : false}
            onPress={() => toogleButton("naturale")}
          >
            <Text>Naturale</Text>
          </Button>
          <Button
            active={typeObjetivesToShow === "culturale" ? true : false}
            onPress={() => toogleButton("culturale")}
          >
            <Text>Culturale</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
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
    fontSize: 30
  },
  cotumeButton: {
    backgroundColor: Color.lightGreen,
    padding: 5
  },
  textButtonView: {
    color: "white"
  }
});

export default ObjectiveList;
