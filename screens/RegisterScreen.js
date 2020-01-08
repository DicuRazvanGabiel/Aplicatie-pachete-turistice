import React, { useState, useEffect } from "react";
import { StyleSheet, ActivityIndicator, Alert } from "react-native";
import { useDispatch } from "react-redux";
import * as authAuctions from "../store/actions/auth";

import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  CheckBox,
  Body,
  ListItem
} from "native-base";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [tncAccept, setTncAccept] = useState(false);

  const dispatch = useDispatch();

  const singupHandler = async () => {
    setIsLoading(true);
    setError();
    try {
      await dispatch(authAuctions.singup(email, password, city, name));
      setIsLoading(false);
      navigation.navigate("AuthScreen");
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
          <Item floatingLabel>
            <Label>Email</Label>
            <Input onChangeText={email => setEmail(email)} />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input onChangeText={password => setPassword(password)} />
          </Item>
          <Item floatingLabel last>
            <Label>City</Label>
            <Input onChangeText={city => setCity(city)} />
          </Item>
          <Item floatingLabel last>
            <Label>Name</Label>
            <Input onChangeText={name => setName(name)} />
          </Item>
        </Form>
        <ListItem>
            <CheckBox checked={tncAccept}  onPress={() => {setTncAccept(!tncAccept)}}/>
            <Body>
              <Text>Sunt de acord cu GDPR</Text>
            </Body>
          </ListItem>
        <Button
          full
          onPress={() => {
            singupHandler();
          }}
          style={styles.loginButton}
        >
          <Text>Login</Text>
        </Button>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {},
  loginButton: {
    marginTop: 10
  }
});

export default RegisterScreen;
