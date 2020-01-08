import React, { useState, useEffect } from "react";
import { Container, Content, Button, Text } from "native-base";
import { useDispatch } from "react-redux";
import * as Auth from "../store/actions/auth";
import DrawerButton from "../components/DrawerButton";

const Settings = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(Auth.logout());
    navigation.navigate("AuthScreen");
  };
  return (
    <Container>
      <DrawerButton navigation={navigation} />
      <Content>
        <Button rounded danger onPress={handleLogout}>
          <Text>LOGOUT</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default Settings;
