import React, { useState, useEffect } from "react";
import { TextInput, View, AsyncStorage } from "react-native";
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
  Form,
  Switch,
  Item,
  Input, 
} from "native-base";
import { useDispatch } from "react-redux";
import * as Auth from "../store/actions/auth";
import DrawerButton from "../components/DrawerButton";

const Settings = ({ navigation }) => {
  const [enableDistaneNotifications, setEnableDistaneNotifications] = useState(
    true
  );
  const [metersToNotificate, setMetersToNotificate] = useState(10000);
  const [settingsChanged, setSettingsChanged] = useState(false);
  const [settingsObj, setSettingsObj] = useState(null);
  const [changePasswordField, setChangePasswordField] = useState(false);

  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();

  const getSettings = async () => {
    const setObj = await AsyncStorage.getItem("settingsObj");
    if(setObj){
      setSettingsObj(JSON.parse(setObj));
      if(setSettingsObj.dNotificatifications && settingsObj.metersToNotificate){
        setEnableDistaneNotifications(settingsObj.dNotificatifications);
        metersToNotificate(settingsObj.metersToNotificate)
      }
    }else {
      setSettingsObj({
        dNotificatifications: true,
        metersToNotificate: 100
      })
      setEnableDistaneNotifications(true);
      setMetersToNotificate(100)
    }
  };

  useEffect( () => {
      if (!settingsObj) {
        getSettings();
      }
  },[])

  const dispatch = useDispatch();

  const chageMeters = text => {
    const meters = text.replace(/[^0-9]/g, "");
    setMetersToNotificate(meters);
    setSettingsChanged(true);
  };

  const changePasswordHandler = () => {
    setChangePasswordField(true);
  };

  const handleLogout = () => {
    dispatch(Auth.logout());
    navigation.navigate("AuthScreen");
  };

  const handleSave = async () => {
    AsyncStorage.setItem('settingsObj', JSON.stringify({
      dNotificatifications: enableDistaneNotifications,
      metersToNotificate: metersToNotificate
    }))
    setSettingsChanged(false);
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
              onValueChange={val => {
                setEnableDistaneNotifications(val);
                setSettingsChanged(true);
              }}
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

        {changePasswordField ? (<View>
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
        </View>) : (<View></View>)

        }

        {settingsChanged ? (
          <View style={{ paddingTop: 10, paddingHorizontal: 10 }}>
            <Button rounded block success onPress={handleSave}>
              <Text>SAVE</Text>
            </Button>
          </View>
        ) : (
          <View></View>
        )}
        {/* <View style={{ paddingTop: 10, paddingHorizontal: 10 }}>
          <Button rounded block success onPress={handleSave}>
            <Text>SAVE</Text>
          </Button>
        </View> */}

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
