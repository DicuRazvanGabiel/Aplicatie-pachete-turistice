import React, { useState } from "react";
import {
  FlatList,
  Image,
  View,
  StyleSheet,
  Platform,
  Linking,
  TouchableOpacity,
  Alert
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

import Color from "../constants/Colors";
import DrawerButton from "../components/DrawerButton";
import CreateNewItem from "../components/CreateNewItem";

const CreateNewRoute = props => {
  const [typeObjetivesToShow, setTypeObjetivesToShow] = useState("naturale");
  const objectives = props.navigation.getParam("listObjectives");
  const country = props.navigation.getParam("country");
  const userLocation = useSelector(state => state.location.location);

  let newRoute = [];

  const addToRoute = item => {
    newRoute = [...newRoute, item];
  };

  startNewRoute = () => {
    if(newRoute.length < 1){
      Alert.alert('Atentie!', `Alege cel putin un obiective`);
      return;
    }
    props.navigation.navigate("ViewNewRoute",{
      routes: newRoute
    })
  };

  const removeFromRoot = item => {
    newRoute = newRoute.filter(function(value, index, arr) {
      return value.id !== item.id;
    });
  };

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
    return (
      <CreateNewItem
        item={item}
        navigation={props.navigation}
        userLocation={userLocation}
        addRoot={addToRoute}
        removeFromRoot={removeFromRoot}
      />
    );
  };

  const toogleButton = type => {
    setTypeObjetivesToShow(type);
  };

  return (
    <Container>
      <View style={{flex: 1}}>
        <DrawerButton navigation={props.navigation} backButton={true} />
        <FlatList
          data={
            typeObjetivesToShow === "naturale"
              ? naturalObjectives
              : culturalObjectives
          }
          renderItem={renderObjectiv}
          keyExtractor={item => item.title}
        />
      </View>
      <Footer>
        <FooterTab>
          <Button
            active={typeObjetivesToShow === "naturale" ? true : false}
            onPress={() => toogleButton("naturale")}
          >
            <Text>Naturale</Text>
          </Button>
          <Button
            success
            onPress={() => startNewRoute()}
          >
            <Text>Finalizare</Text>
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

export default CreateNewRoute;
