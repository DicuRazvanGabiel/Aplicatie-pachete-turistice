import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'

export default class PackegesRo extends Component {

    changeScreen = (packeg) => {

    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <TouchableOpacity onPress={() => this.changeScreen(1)} > 
                    <View style={styles.packege}>

                    </View>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    packege: {
        height: 200,
        width: '90%',
        backgroundColor: 'red',
        margin: 10
    }
})
