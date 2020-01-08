import React, { useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator, Alert } from "react-native";

import { useDispatch } from "react-redux";
import * as authAuctions from "../store/actions/auth";

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

  const singinHandler = async () => {
    setIsLoading(true);
    setError();
    try {
        await dispatch(authAuctions.singin(email, password));
        setIsLoading(false);
        navigation.navigate("MainApplication");
    } catch (error) {
        setError(error.message)
        setIsLoading(false);
    }
  };

  useEffect(() => {
      if(error){
          Alert.alert('Error', error, [{text: 'Okay'}]);
      }
  }, [error])

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
              placeholder="Email"
              onChangeText={email => {
                setEmail(email);
              }}
            />
          </Item>
          <Item last>
            <Input
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
