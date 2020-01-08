import React, { useEffect } from "react";
import { View, StyleSheet, AsyncStorage, ActivityIndicator } from "react-native";
import { useDispatch } from "react-redux";

import { login } from "../store/actions/auth";

const StartupScreenAutoLogin = ({navigation}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const tryLogin = async () => {
            const userData = await  AsyncStorage.getItem("userData");

            if(!userData){
                navigation.navigate("AuthScreen");
                return; 
            }
            const transformedData = JSON.parse(userData); 
            const { userId, token, exparitionDate } = transformedData;
            const expDate = new Date(exparitionDate);

            if(expDate <= new Date() || !token || !userId) {
                navigation.navigate("AuthScreen");
                return;
            }
        
            dispatch(login(userId, token))
            navigation.navigate("MainApplication");
        }

        tryLogin();
    }, [])
    return(
        <View style={styles.containe}>
            <ActivityIndicator size="large" />
        </View>
    )
}

const styles = StyleSheet.create({
    containe: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default StartupScreenAutoLogin