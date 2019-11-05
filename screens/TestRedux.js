import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";

const TestRedux = props => {

    const availablePackages = useSelector(state => state.packages.pachete)
    console.log(availablePackages);
    

  return <Text>Test</Text>;
};

export default TestRedux