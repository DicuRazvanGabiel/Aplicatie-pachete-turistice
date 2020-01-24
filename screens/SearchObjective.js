import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import DrawerButton from "../components/DrawerButton";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import ObjectivItemList from "../components/ObjectiveItemList";

let matchingObjetives = [];

const SearchObjective = ({ navigation }) => {
  const userLocation = useSelector(state => state.location.location);
  const [valueTextInput, onChangeText] = useState("");
  const [isloading, setIsloading] = useState(false);
  const objetives = useSelector(state => state.packages.objectives);
  const listOfObjectives = [];
  let historySearches = [];
  const [historyState, setHistoryState] = useState(null);

  for (const [id, value] of Object.entries(objetives)) {
    listOfObjectives.push(value);
  }

  const searchIconPressHandler = async () => {
    Keyboard.dismiss();
    onChangeText("");
    matchingObjetives = listOfObjectives.filter(objectiv =>
      objectiv.title.toLowerCase().includes(valueTextInput.toLowerCase())
    );
  };

  const getFirstHistory = async () => {
    historySearches = await AsyncStorage.getItem("historySearch");

    if (historySearches) {
      historySearches = JSON.parse(historySearches);
      setHistoryState(historySearches);
    }
  };

  if (!historyState) {
    getFirstHistory();
  }

  const setHistoryItem = async item => {
    historySearches = await AsyncStorage.getItem("historySearch");

    if (!historySearches) {
      historySearches = [item.title];
    } else {
      historySearches = JSON.parse(historySearches);
      if (historySearches.length <= 2) {
        historySearches.push(item.title);
      } else {
        historySearches.splice(0, 1);
        historySearches.push(item.title);
      }
    }

  setHistoryState(historySearches);
    await AsyncStorage.setItem(
      "historySearch",
      JSON.stringify(historySearches)
    );
  };

  const renderObjectiv = itemObj => {
    const { item } = itemObj;
    return (
      <ObjectivItemList
        item={item}
        navigation={navigation}
        userLocation={userLocation}
        callBackFunction={setHistoryItem}
      />
    );
  };

  if (isloading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const renderHistory = () => {
    if (historyState) {
      return (
        <View style={{ justifyContent: "center", borderBottomWidth: 1 }}>
          <Text style={{ color: "green" }}>History</Text>
          {historyState.map(item => {
            return (
              <TouchableOpacity key={item} onPress={() => {onChangeText(item)}}>
                <Text style={{ textAlign: "center", fontSize: 15 }}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      );
    }
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
      {renderHistory()}
      <View>
        <FlatList
          data={matchingObjetives}
          renderItem={renderObjectiv}
          keyExtractor={(item, index) => index+''}
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
