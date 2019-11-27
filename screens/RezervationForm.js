import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  KeyboardAvoidingView,
  ActivityIndicator
} from "react-native";
import { DatePicker } from "native-base";
import DrawerButton from "../components/DrawerButton";
import ModalDropdown from "react-native-modal-dropdown";
import { useSelector } from "react-redux";

const RezervationForm = ({ navigation }) => {
  const [textInputNume, setTextInputNume] = useState("");
  const [textInputPrenume, setTextInputPrenume] = useState("");
  const [loadinSend, setLoadinSend] = useState(true);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [email, setEmail] = useState("");
  const [selectedoption, setselectedoption] = useState("");
  const [agentiiOptions, setagentiiOptions] = useState([])

  const packege = navigation.getParam("packege");
  const lang  = useSelector(state => state.language.language);

  const fetchAgency = async () => {
    const response = await fetch(
      "https://natbiot-travelling-d0a35.firebaseio.com/flamelink/environments/production/content/agentii/en-US.json"
    );
    const objResponse = await response.json();
    console.log(objResponse);
    let agentii = [];

    for (const [id, value] of Object.entries(objResponse)) {
      switch (lang) {
        case "ro":
          agentii.push(value.ro);
          break;

        case "en":
          agentii.push(value.en);
          break;

        case "bg":
          agentii.push(value.bg);
          break;
      }
    }

    setagentiiOptions(agentii);
    setLoadinSend(false);
  };

  if(agentiiOptions.length === 0){
    fetchAgency();
  }

  const sendHandler = () => {
    const msg = {
      emailtoSend: "dicu.razvan.gabriel@gmail.com",
      textInputNume,
      textInputPrenume,
      dateFrom,
      dateTo,
      email,
      packege: packege.title
    };

    sendWrapper = async () => {
      setLoadinSend(true);
      const res = await fetch(
        "https://us-central1-natbiot-travelling-d0a35.cloudfunctions.net/emailMessage",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(msg)
        }
      );
      setLoadinSend(false);
    };

    if (!loadinSend) {
      sendWrapper();
    }
  };

  if (loadinSend) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" enabled>
        <DrawerButton navigation={navigation} backButton={true} />
        <View style={styles.inputContainer}>
          <View style={{ width: "100%", justifyContent: "center" }}>
            <Text style={{ textAlign: "center", fontSize: 20 }}>
              Pachet: {packege.title}
            </Text>
          </View>
          <TextInput
            placeholder="Nume"
            style={styles.input}
            onChangeText={text => setTextInputNume(text)}
            value={textInputNume}
          />

          <TextInput
            placeholder="Prenume"
            style={styles.input}
            onChangeText={text => setTextInputPrenume(text)}
            value={textInputPrenume}
          />
          <View style={styles.datePicker}>
            <Text>From: </Text>
            <DatePicker
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Select date"
              textStyle={{ color: "green" }}
              placeHolderTextStyle={{ color: "#d3d3d3" }}
              onDateChange={setDateFrom}
              disabled={false}
            />

            <Text>To: </Text>
            <DatePicker
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Select date"
              textStyle={{ color: "green" }}
              placeHolderTextStyle={{ color: "#d3d3d3" }}
              onDateChange={setDateTo}
              disabled={false}
            />
          </View>

          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={text => setEmail(text)}
            value={email}
          />

          <ModalDropdown
            options={agentiiOptions}
            select={idx => {
              setselectedoption(idx);
            }}
          />
        </View>
        <View>
          <Button title="Trimite" onPress={sendHandler} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    margin: 10,
    padding: 3
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 2,
    borderRadius: 10,
    marginVertical: 5
  },
  datePicker: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default RezervationForm;
