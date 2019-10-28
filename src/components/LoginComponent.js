import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import InputText from "./InputText";
import ButtonMaterial from "./ButtonMaterial";

export default class LoginComponent extends Component {

  state={
    user: '',
    pass: ''
  }

  onChangeTextUser = (textUser) => {
    console.log(textUser);
    this.setState({user: textUser})
  } 

  onChangeTextPass = (testPass) => {
    this.setState({user: testPass})
  }

  handleLogin = () => {
    this.props.getUserAndPass(this.state);
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <InputText style={styles.materialUnderlineTextbox1} placeholder='Email' onChangeText={this.onChangeTextUser}/>
        <InputText style={styles.materialUnderlineTextbox2} placeholder='Parola' onChangeText={this.onChangeTextPass}/>
        <ButtonMaterial style={styles.ButtonMaterial} text="LOGIN" onPress={() => {this.handleLogin()}}/>
        <Text style={styles.text}>SAU</Text>
        <ButtonMaterial style={styles.ButtonMaterial} text="CONT NOU" onPress={() => {this.props.navigation.navigate('RegisterScreen')}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  materialUnderlineTextbox1: {
    width: 360,
    height: 43,
    marginBottom: 5,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.2
  },
  materialUnderlineTextbox2: {
    width: 360,
    height: 43,
    marginBottom: 5,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.2
  },
  ButtonMaterial: {
    width: 200,
    height: 36,
    marginTop: 10
  },
  text: {
    color: "#121212",
    marginTop: 10,
    marginBottom: 10,
  },
  ButtonMaterial1: {
    width: 200,
    height: 36
  }
});
