import React, { useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator, Alert } from "react-native";

import { useDispatch } from "react-redux";
import * as authAuctions from "../store/actions/auth";
import * as Facebook from 'expo-facebook';

import {
  Form,
  Item,
  Input,
  Container,
  Content,
  Button,
  Text
} from "native-base";

const AuthScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const logInFacebook = async () => {
    try {
      await Facebook.initializeAsync('2275759055840212');
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
      console.log(message)
    }
  }

  const singinHandler = async () => {
    setIsLoading(true);
    setError();
    try {
      await dispatch(
        authAuctions.singin(
          email.toLocaleLowerCase(),
          password.toLocaleLowerCase()
        )
      );
      setIsLoading(false);
      navigation.navigate("MainApplication");
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      Alert.alert("Error", error, [{ text: "Okay" }]);
    }
  }, [error]);

  if (isLoading) {
    return (
      <Container style={{ justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </Container>
    );
  }

  return (
    <Container>
      <Content>
        <Form>
          <Item>
            <Input
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Email"
              onChangeText={email => {
                setEmail(email);
              }}
            />
          </Item>
          <Item last>
            <Input
              autoCapitalize="none"
              placeholder="Password"
              secureTextEntry
              onChangeText={password => {
                setPassword(password);
              }}
            />
          </Item>
        </Form>
        <Button full onPress={singinHandler}>
          <Text>Login</Text>
        </Button>
        <View style={styles.orContainer}>
          <Text>OR</Text>
        </View>
        <Button
          full
          onPress={() => {
            navigation.navigate("RegisterScreen");
          }}
        >
          <Text>Register</Text>
        </Button>
        <View style={styles.orContainer}>
          <Text>OR</Text>
        </View>
        <Button full onPress={logInFacebook}>
          <Text>FACEBOOK</Text>
        </Button>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    // justifyContent: "center",
    alignItems: "center"
  },
  orContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5
  }
});

export default AuthScreen;
