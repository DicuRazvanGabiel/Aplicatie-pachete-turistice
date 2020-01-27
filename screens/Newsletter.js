import React, { useState } from "react";
import { Button, View, ActivityIndicator } from "react-native";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Switch,
  Text
} from "native-base";
import DrawerButton from "../components/DrawerButton";

const Newsletter = ({ navigation }) => {
  const [nume, setNume] = useState();
  const [email, setEmail] = useState();
  const [text, setText] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [enableDistaneNotifications, setEnableDistaneNotifications] = useState(
    false
  );

  const hendleSend = async () => {
    const msg = {
      nume,
      email,
      textToSend: text
    };
    setIsLoading(true);
    const res = await fetch(
      "https://us-central1-natbiot-travelling-d0a35.cloudfunctions.net/newsletter",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(msg)
      }
    );
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <Container>
        <Content>
          <ActivityIndicator size="large" />
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Content>
        <DrawerButton navigation={navigation} backButton={true} />
        <Form>
          <Item floatingLabel last>
            <Label>Nume</Label>
            <Input onChangeText={t => setNume(t)} />
          </Item>

          <Item floatingLabel last>
            <Label>Email</Label>
            <Input onChangeText={t => setEmail(t)} />
          </Item>

          <Item floatingLabel last>
            <Label>Text</Label>
            <Input onChangeText={t => setText(t)} />
          </Item>
        </Form>
        <View style={{justifyContent: 'space-between', alignItems:'center', flexDirection: 'row', margin: 10}}>
          <Text>Vreau sa ma abonez</Text>
          <Switch
            value={enableDistaneNotifications}
            onValueChange={val => {
              setEnableDistaneNotifications(val);
            }}
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button onPress={hendleSend} title="Send" />
        </View>
      </Content>
    </Container>
  );
};

export default Newsletter;
