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

import ObjectivItemList from "../components/ObjectiveItemList"
import DrawerButton from "../components/DrawerButton"

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

    return ( <ObjectivItemList item={item} navigation={props.navigation} userLocation={userLocation}/>)
  };

  const toogleButton = type => {
    setTypeObjetivesToShow(type);
  };
 
  return (
    <Container>
      <Content>
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

});

export default ObjectiveList;