import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default class Settings extends Component {
    static navigationOptions = {
        title: "Setari",
        // tabBarIcon:() =>  <MaterialIcons name="settings" size={28}/>

    }
    render() {
        return (
            <View>
                <Text> Settings Screen </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
