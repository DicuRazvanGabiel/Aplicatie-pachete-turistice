import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  View,
  Button
} from "react-native";
import { Container, Content, Card, CardItem, Body, Text } from "native-base";
import { FlatList } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { fetchPachages } from "../store/actions/packages";

import { Notifications } from 'expo';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as TaskManager from 'expo-task-manager';

import Colors from "../constants/Colors";
import DrawerButton from "../components/DrawerButton";
import { getDistance } from "geolib";

const LOCATION_TASK_NAME = 'background-location-task';

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data: { locations }, error }) => {
  if (error) {
    console.log(error);
    return;
  }
  sendNotificationImmediately();
});

sendNotificationImmediately = async () => {
  let notificationId = await Notifications.presentLocalNotificationAsync({
    title: 'Natbiot Travelling',
    body: 'You are ' + 'km away from' ,
  });
};

_getLocationAsync = async () => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status === 'granted') {
    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      accuracy: Location.Accuracy.Balanced,
      timeInterval: 10000
    });
  }
  const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }
};

const Peckages = props => {
  const [isLoaded, setisLoaded] = useState(false);
  const dispatch = useDispatch();
  const dataPeckages = useSelector(state => state.packages.packages);
  const lang  = useSelector(state => state.language.language);
  
  useEffect(() => {
    dispatch(fetchPachages(lang)).then(setisLoaded(true));
    _getLocationAsync();
  }, [dispatch]);

  const packagePressHandler = pack => {
    props.navigation.navigate("PeckageDetailScreen", {
      package: pack
    });
  };

  const renderPeckageComponent = itemObj => {
    const { item } = itemObj;

    return (
      <Content style={{ padding: 10 }}>
        <TouchableOpacity onPress={() => packagePressHandler(item)}>
          <Card>
            <CardItem style={{ backgroundColor: Colors.lightGreen }}>
              <Body>
                <Text style={{ color: "white" }}>{item.title}</Text>
                <Text style={{ color: "white" }}>{item.content}</Text>
              </Body>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </Content>
    );
  };

  if (isLoaded && dataPeckages) {
    return (
      <Container>
        <DrawerButton navigation={props.navigation} backButton={true}/>
        <FlatList
          data={dataPeckages}
          renderItem={renderPeckageComponent}
          keyExtractor={item => item.title}
        />
      </Container>
    );
  } else {
    return (
      <Container style={{ alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </Container>
    );
  }
};

export default Peckages;
