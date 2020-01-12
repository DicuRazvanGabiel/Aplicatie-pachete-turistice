import React, { useState, useEffect } from "react";
import { TextInput, View } from "react-native";
import {
  Container,
  Content,
  Button,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
  Input
} from "native-base";
import { useDispatch } from "react-redux";
import * as Auth from "../store/actions/auth";
import DrawerButton from "../components/DrawerButton";

const Settings = ({ navigation }) => {
  const [enableDistaneNotifications, setEnableDistaneNotifications] = useState(
    true
  );
  const [metersToNotificate, setMetersToNotificate] = useState(10000);

  const dispatch = useDispatch();

  const chageMeters = text => {
    const meters = text.replace(/[^0-9]/g, "");
    setMetersToNotificate(meters);
  };

  const changePasswordHandler = () => {
    navigation.navigate("ChangePasswordScreen");
  };

  const handleLogout = () => {
    dispatch(Auth.logout());
    navigation.navigate("AuthScreen");
  };

  const handleSave = () => {
    navigation.navigate("PeckagesScreen");
  };

  return (
    <Container>
      <DrawerButton navigation={navigation} />
      <Content>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "green" }}>
              <Icon active name="md-notifications" />
            </Button>
          </Left>
          <Body>
            <Text>Distance notifications</Text>
          </Body>
          <Right>
            <Switch
              value={enableDistaneNotifications}
              onValueChange={setEnableDistaneNotifications}
            />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "red" }}>
              <Icon active name="map" />
            </Button>
          </Left>
          <Body>
            <Text>Meters to notificate</Text>
          </Body>
          <Right>
            <View style={{ width: 100 }}>
              <Input
                keyboardType="numeric"
                placeholder={metersToNotificate + ""}
                onChangeText={chageMeters}
                value={metersToNotificate + ""}
                style={{ width: 100 }}
              />
            </View>
            <Text>Meters</Text>
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "blue" }}>
              <Icon active name="lock" />
            </Button>
          </Left>
          <Body>
            <Text>Change passwod</Text>
          </Body>
          <Button bordered onPress={changePasswordHandler}>
            <Text>Change</Text>
          </Button>
        </ListItem>
        <View style={{ paddingTop: 10, paddingHorizontal: 10 }}>
          <Button rounded block success onPress={handleSave}>
            <Text>SAVE</Text>
          </Button>
        </View>

        <View style={{ padding: 10 }}>
          <Button rounded block danger onPress={handleLogout}>
            <Text>LOGOUT</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default Settings;
