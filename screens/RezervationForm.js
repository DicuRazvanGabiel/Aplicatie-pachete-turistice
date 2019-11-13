import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, Button, KeyboardAvoidingView } from "react-native";
import {  DatePicker } from 'native-base';
import DrawerButton from "../components/DrawerButton"

const RezervationForm = ({ navigation }) => {
  const [textInputNume, setTextInputNume] = useState('');
  const [textInputPrenume, setTextInputPrenume] = useState('');
  const [date, setDate] = useState('');
  const [ email, setEmail] = useState('');
  return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding" enabled>
        <DrawerButton navigation={navigation} backButton={true} />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Nume'
            style={styles.input}
            onChangeText={text => setTextInputNume(text)}
            value={textInputNume}
          />

          <TextInput
            placeholder='Prenume'
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
              onDateChange={setDate}
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
              onDateChange={setDate}
              disabled={false}
            />
          </View>

          <TextInput
            placeholder='Email'
            style={styles.input}
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>
        <View>
          <Button title='Trimite' onPress={() => { console.log('setrimite') }}/>
        </View>
        </KeyboardAvoidingView>
      </View>
  );
};

const styles = StyleSheet.create({
    container:{

    },
    inputContainer :{
      margin: 10,
      padding: 3
    },  
    input:{
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1,
      padding: 2,
      borderRadius: 10,
      marginVertical: 5
    },
    datePicker: {
      flexDirection: 'row',
      alignItems: 'center'
    }
})

export default RezervationForm;
