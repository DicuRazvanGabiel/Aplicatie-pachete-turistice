import React from "react";
import {
  Form,
  Item,
  Input,
  Container,
  Content,
  Button,
  Text
} from "native-base";

import { StyleProp } from "react-native";

const ChangePasswordScreen = () => {
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();
  const [isLoading, setIsLoading] = useState(false);

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
              placeholder="Password"
              secureTextEntry
              onChangeText={pass => {
                setPassword(pass);
              }}
            />
          </Item>
          <Item last>
            <Input
              autoCapitalize="none"
              placeholder="Re Password"
              secureTextEntry
              onChangeText={password => {
                setRePassword(password);
              }}
            />
          </Item>
        </Form>
        <Button full>
          <Text>Change</Text>
        </Button>
        <View style={styles.orContainer}>
          <Text>OR</Text>
        </View>
        <Button
          full
          onPress={() => {
            navigation.navigate("Settings");
          }}
        >
          <Text>Cancer</Text>
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

export default ChangePasswordScreen;
