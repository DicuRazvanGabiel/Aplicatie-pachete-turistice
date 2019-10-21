import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default class MaterialUnderlineTextbox1 extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="rgba(78,76,76,1)"
          style={styles.inputStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D9D5DC",
    borderBottomWidth: 1
  },
  inputStyle: {
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    paddingTop: 16,
    paddingRight: 5,
    paddingBottom: 8,
    fontSize: 16,
    lineHeight: 16
  }
});
