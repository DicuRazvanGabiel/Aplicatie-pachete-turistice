import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DrawerButton = ({ navigation, backButton = false }) => {
  const renderBackButton = () => {
    return(
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={{ margin: 5 }}>
          <Ionicons name="ios-arrow-round-back" size={35} color="black" />
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <View style={{ margin: 5 }}>
          <Ionicons name="ios-menu" size={35} color="black" />
        </View>
      </TouchableOpacity>
      <View style={styles.cotainerText}>
        <Text style={{ fontSize: 25 }}>Natbiot Travelling</Text>
      </View>
      {backButton ? renderBackButton() : (<View></View>)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10
  },
  cotainerText: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default DrawerButton;
