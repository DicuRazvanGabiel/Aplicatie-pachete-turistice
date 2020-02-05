import React, { useState, useEffect } from "react";
import { View, Text,  ActivityIndicator  } from "react-native";
import { WebView } from 'react-native-webview';
import { useSelector } from "react-redux";

import DrawerButton from "../components/DrawerButton";

const AdvantagesNatbiot = ({ navigation }) => {
  const [isLodaing, setIsLodaing] = useState(true)
  const [htmlToShow, setHtmlToShow] = useState('')
  const lang  = useSelector(state => state.language.language);
  
  const fetchAdvantages = async () => {
    let html = '';
    const response = await fetch(`https://natbiot-travelling-d0a35.firebaseio.com/flamelink/environments/production/content/avantajeleServiciilorNatbiot/en-US.json`);
    const objResponse = await response.json();
    for (const [id, value] of Object.entries(objResponse)) {
      html += value[lang];
    }
    setHtmlToShow(html);
    setIsLodaing(false);
  }
  
  useEffect(() => {
    fetchAdvantages();
  })

  if(isLodaing){
    return(
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    )
  } else {
    return (
      <View style={{flex: 1}}>
          <DrawerButton navigation={navigation}/>
          <WebView 
              source={{ html: htmlToShow }}
          />
      </View>
    );
  }
};

export default AdvantagesNatbiot;
