import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const DrawerButton = (props) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
            <AntDesign name="menu-fold" size={32} color="black"/>
        </TouchableOpacity>
      <View style={styles.cotainerText}>
        <Text style={{fontSize: 25}}>Natbiot Travelling</Text>
      </View>
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
        width: '100%',
        alignItems: "center",
        justifyContent: "center"
    }
})

export default DrawerButton;
