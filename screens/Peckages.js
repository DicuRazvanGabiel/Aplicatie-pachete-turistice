import React, { useState, useEffect } from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { Container, Content, Card, CardItem, Body, Text } from "native-base";
import { FlatList } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { fetchPachages } from "../store/actions/packages";

import Colors from "../constants/Colors"

const Peckages = props => {
  const [isLoaded, setisLoaded] = useState(false);
  const dispatch = useDispatch();
  const dataPeckages = useSelector(state => state.packages.packages);

  useEffect(() => {
    dispatch(fetchPachages()).then(setisLoaded(true));
  }, [dispatch]);

  const packagePressHandler = (pack) =>{
    props.navigation.navigate('PeckageDetailScreen',{
      package: pack
    })
  }
  
  const renderPeckageComponent = itemObj => {
    const { item } = itemObj;

    return (
      <Content style={{ padding: 10 }}>
        <TouchableOpacity onPress={() => packagePressHandler(item)}>
          <Card>
            <CardItem style={{backgroundColor: Colors.lightGreen}}>
              <Body>
                <Text style={{color: 'white'}}>{item.title}</Text>
                <Text style={{color: 'white'}}>{item.content}</Text>
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
