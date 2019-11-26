import React, { useState, useEffect } from "react";
import { View, Text, WebView, ActivityIndicator  } from "react-native";
import { useSelector } from "react-redux";

import DrawerButton from "../components/DrawerButton";

const AdvantagesNatbiot = ({ navigation }) => {
  const [isLodaing, setIsLodaing] = useState(true)
  const [htmlToShow, setHtmlToShow] = useState('')
  const lang  = useSelector(state => state.language.language);
  
  fetchAdvantages = async () => {
    const response = await fetch(`https://natbiot-travelling-d0a35.firebaseio.com/flamelink/environments/production/content/avantajeleServiciilorNatbiot/en-US/1574757605444/${lang}.json`);
    const objResponse = await response.json();
    setHtmlToShow(objResponse);
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
