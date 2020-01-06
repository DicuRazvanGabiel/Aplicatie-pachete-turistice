import React from "react";
import { StyleSheet, View } from "react-native";

import {
  Form,
  Item,
  Input,
  Container,
  Content,
  Button,
  Text
} from "native-base";

const AuthScreen = () => {
  return (
    <Container>
      <Content>
        <Form>
          <Item>
            <Input placeholder="Email" onChangeText={email => {}} />
          </Item>
          <Item last>
            <Input
              placeholder="Password"
              secureTextEntry
              onChangeText={password => {}}
            />
          </Item>
        </Form>
        <Button full>
          <Text>Login</Text>
        </Button>
        <View style={styles.orContainer}>
          <Text>OR</Text>
        </View>
        <Button full>
          <Text>Sing Up</Text>
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
    alignItems: "center",
    
  },
  orContainer:{
    width: "100%",
    justifyContent:'center',
    alignItems:'center',
    marginVertical: 5
}
});

export default AuthScreen;
