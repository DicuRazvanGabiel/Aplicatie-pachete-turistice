import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'

export default class ChooseLang extends Component {

    changeScreen = (lang) => {
        // await this._storeData('lang', lang)
        this.props.navigation.navigate('PakagesListScreen', {
            lang
        });
    }

    _storeData = async (key, obj) => {
        try {
          await AsyncStorage.setItem(key, JSON.stringify(obj));
        } catch (error) {
          console.log(error);
        }
    };

    render() {
        return (
            <View style={styles.container}>
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
        )
    }
}

const styles = StyleSheet.create({
    container: {
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
