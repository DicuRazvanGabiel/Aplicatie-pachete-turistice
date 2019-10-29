import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, AsyncStorage } from "react-native";
import LoginComponent from "../components/LoginComponent";

export default class Login extends Component {
  getUserAndPass = (user) => {
    const userObj = {
      username: user.user,
      password: user.pass
    }

    this.props.navigation.navigate('mainNavigator');
  }

  _storeData = async (key, obj) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(obj));
    } catch (error) {
      console.log(error);
    }
  };

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('TASKS');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <LoginComponent style={styles.loginComponent} 
          navigation={this.props.navigation} 
          getUserAndPass={this.getUserAndPass}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1
  },
  loginComponent: {
    height: 322,
    marginTop: 245
  }
});
