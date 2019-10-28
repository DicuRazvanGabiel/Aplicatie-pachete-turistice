import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default class InputText extends Component {

  onChangeText= (text) =>{
    this.props.onChangeText(text);
  }
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TextInput
          placeholder={this.props.placeholder}
          placeholderTextColor="rgba(78,76,76,1)"
          style={styles.inputStyle}
          onChangeText={text => this.onChangeText(text)}
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
