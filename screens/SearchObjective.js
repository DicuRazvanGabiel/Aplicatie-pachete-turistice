import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  FlatList
} from "react-native";
import DrawerButton from "../components/DrawerButton";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import ObjectivItemList from "../components/ObjectiveItemList"

let matchingObjetives = [];

const SearchObjective = ({ navigation }) => {
  const userLocation = useSelector(state => state.location.location);
  const [valueTextInput, onChangeText] = useState("");
  const objetives = useSelector(state => state.packages.objectives);
  const listOfObjectives = [];

  for (const [id, value] of Object.entries(objetives)) {
    listOfObjectives.push(value);
  }

  const searchIconPressHandler = () => {
    Keyboard.dismiss();
    onChangeText("");
    matchingObjetives = listOfObjectives.filter(objectiv =>
      objectiv.title.toLowerCase().includes(valueTextInput.toLowerCase())
    );
  };

  const renderObjectiv = itemObj => {
    const { item } = itemObj;

    return (
      <ObjectivItemList
        item={item}
        navigation={navigation}
        userLocation={userLocation}
      />
    );
  };

  return (
    <View style={styles.container}>
      <DrawerButton navigation={navigation} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => onChangeText(text)}
          value={valueTextInput}
        />
        <TouchableOpacity onPress={searchIconPressHandler}>
          <AntDesign name="search1" size={32} color="green" />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={matchingObjetives}
          renderItem={renderObjectiv}
          keyExtractor={item => item.title}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    flex: 1,
    marginRight: 10,
    padding: 3,
    borderRadius: 5
  },
  inputContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    justifyContent: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginTop: 5
  }
});

export default SearchObjective;
