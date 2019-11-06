import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { changeLanguage } from "../store/actions/language";
import { fetchPachages } from "../store/actions/packages";

const TestRedux = props => {
  const availablePackages = useSelector(state => state.packages.packages);
  const language = useSelector(state => state.language.language);

  const dispatch = useDispatch();
  const changeLanguageHandler = () => {
    dispatch(changeLanguage("bg"));
    dispatch(fetchPachages());
  };

  console.log(availablePackages);
  console.log(language);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{language}</Text>
      <Button title="Change Text" onPress={changeLanguageHandler} />
    </View>
  );
};

export default TestRedux;
