import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, } from 'react-native'

import HeaderLogosRo from '../components/HeaderLogosRo'
import DisclamerRo from '../components/DisclamerRo'

export default class ChooseLang extends Component {

    changeScreen = async (lang) => {
        this.props.navigation.navigate('MainScreenContainer', {
            lang
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderLogosRo />
                <View style={styles.containerLang}>
                    <View>
                        <TouchableOpacity onPress={() => this.changeScreen("ro")}>
                            <Image
                                style={styles.image}
                                source={require('../../assets/images/languages/ro.jpg')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => this.changeScreen("en")}>
                            <Image
                                style={styles.image}
                                source={require('../../assets/images/languages/eng.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => this.changeScreen("bg")}>
                            <Image
                                style={styles.image}
                                source={require('../../assets/images/languages/bg.jpg')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <DisclamerRo />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },  
    containerLang: {
        flex: 1,
        margin: 20,
        alignItems: "center",
        justifyContent: "space-around"
    },
    image: {
        width: 200,
        height: 100
    }
})
