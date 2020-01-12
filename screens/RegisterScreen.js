import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Alert,
  ScrollView,
  View,
  KeyboardAvoidingView
} from "react-native";
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
  const [capchaNumber, setCapchaNumber] = useState();
  
  const dispatch = useDispatch();
  
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const [capchaNumberORG, setCapchaNumberORG] = useState(getRandomInt(1000, 9999));

  const singupHandler = async () => {
    if (!tncAccept) {
      Alert.alert(
        "Termeni si conditi",
        "Nu ati selectat termenii si conditiile",
        [{ text: "Okay" }]
      );
      return;
    }

    if(capchaNumberORG+'' !== capchaNumber){
      Alert.alert(
        "CAPCHA",
        "CAPCHA GRESIT",
        [{ text: "Okay" }]
      );
      return;
    }

    setIsLoading(true);
    setError();
    try {
      await dispatch(
        authAuctions.singup(
          email.toLocaleLowerCase(),
          password.toLocaleLowerCase(),
          city,
          name
        )
      );
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
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
      <Container>
        <Content>
          <ScrollView>
            <Form>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input
                  autoCapitalize="none"
                  onChangeText={email => setEmail(email)}
                  keyboardType="email-address"
                />
              </Item>
              <Item floatingLabel last>
                <Label>Password</Label>
                <Input
                  autoCapitalize="none"
                  ÍonChangeText={password => setPassword(password)}
                  secureTextEntry
                />
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
              <CheckBox
                checked={tncAccept}
                onPress={() => {
                  setTncAccept(!tncAccept);
                }}
              />
              <Body>
                <Text>Sunt de acord cu politica GDPR</Text>
              </Body>
            </ListItem>
            <ListItem>
              <View>
                <Text>Introduceti numerele: {capchaNumberORG}</Text>
                <Input
                  keyboardType="numeric"
                  placeholder="CAPCHA"
                  onChangeText={capcha => setCapchaNumber(capcha)}
                />
              </View>
            </ListItem>
            <Button
              full
              onPress={() => {
                singupHandler();
              }}
              style={styles.loginButton}
            >
              <Text>SINGUP</Text>
            </Button>
            <View style={{ marginTop: 10 }}>
              <Button
                full
                onPress={() => {
                  navigation.navigate("AuthScreen");
                }}
                style={styles.loginButton}
              >
                <Text>Login</Text>
              </Button>
            </View>
          </ScrollView>
        </Content>
      </Container>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {},
  loginButton: {
    marginTop: 10
  }
});

export default RegisterScreen;
