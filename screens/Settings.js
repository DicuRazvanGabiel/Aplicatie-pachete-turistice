import React, { useState, useEffect } from "react";
import { Container, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch} from "native-base";
import { useDispatch } from "react-redux";
import * as Auth from "../store/actions/auth";
import DrawerButton from "../components/DrawerButton";

const Settings = ({ navigation }) => {
  const [ enableDistaneNotifications, setEnableDistaneNotifications ] = useState(true)
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(Auth.logout());
    navigation.navigate("AuthScreen");
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
            <Switch value={enableDistaneNotifications} onValueChange={setEnableDistaneNotifications}/>
          </Right>
        </ListItem>
        <Button rounded danger onPress={handleLogout}>
          <Text>LOGOUT</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default Settings;
