import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
import { useSelector } from "react-redux";

import DrawerButton from "../components/DrawerButton";

import store from "../store";
import Translate from "../constants/Translate";

const TermeniConditii = ({ navigation }) => {
    const [isLodaing, setIsLodaing] = useState(true);
    const [htmlToShow, setHtmlToShow] = useState("");
    const lang = useSelector((state) => state.language.language);

    fetchAdvantages = async () => {
        const response = await fetch(
            `https://natbiot-travelling-d0a35.firebaseio.com/flamelink/environments/production/content/termeniSiConditii/en-US/1582305126984/${lang}.json`
        );
        const objResponse = await response.json();
        setHtmlToShow(objResponse);
        setIsLodaing(false);
    };

    useEffect(() => {
        fetchAdvantages();
    });

    if (isLodaing) {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <ActivityIndicator size="large" />
            </View>
        );
    } else {
        return (
            <View style={{ flex: 1 }}>
                <DrawerButton navigation={navigation} />
                <WebView source={{ html: htmlToShow }} />
            </View>
        );
    }
};

TermeniConditii.navigationOptions = ({ navigation }) => {
    let lang = store.getState().language.language;
    let translate = Translate.termeni[lang];
    return {
        title: translate,
    };
};

export default TermeniConditii;
