import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { Container, Content, Card, CardItem, Body, Text } from "native-base";
import { FlatList } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { fetchPachages } from "../store/actions/packages";

const Peckages = props => {
  const [isLoaded, setisLoaded] = useState(false);
  const dispatch = useDispatch();
  const dataPeckages = useSelector(state => state.packages.packages);
  console.log(dataPeckages);
//   const fetchPeckage = () => {
//     dispatch(fetchPachages()).then(setisLoaded(true));
//   };

//   if (!isLoaded) {
//     fetchPeckage();
//   }

  useEffect(()=>{
    dispatch(fetchPachages()).then(setisLoaded(true));
  },[dispatch]);

  const renderPeckageComponent = itemObj => {
    const { item } = itemObj;

    return (
      <Content style={{ padding: 10 }}>
        <Card>
          <CardItem>
            <Body>
              <Text>{item.title}</Text>
              <Text>{item.content}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  };

  if (isLoaded && dataPeckages) {
    return (
      <Container>
        <FlatList
          data={dataPeckages}
          renderItem={renderPeckageComponent}
          keyExtractor={ item => item.title}
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
