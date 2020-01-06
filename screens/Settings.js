import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import DrawerButton from "../components/DrawerButton";


const Settings = ({ navigation }) => {
    return(
        <View>
            <DrawerButton navigation={navigation} />
            <Text>
                Settings
            </Text>
        </View>
    );
}

export default Settings;