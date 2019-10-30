import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import PakegesRo from "../components/PackegesRo"
import PackegesBg from "../components/PackegesBg"

export default class PackagesList extends Component {
    render() {
        const lang = this.props.screenProps

        if(lang === "ro"){
            return (
                <View style={styles.container}>
                    <PakegesRo navigation={this.props.navigation}/>
                </View>
            )
        }else if(lang === "en"){
            return (
                <View style={styles.container}>
                    <PakegesRo navigation={this.props.navigation}/>
                </View>
            )
        }else{
            return (
                <View style={styles.container}>
                    {/* <PackegesBg  navigation={this.props.navigation}/> */}
                    <PakegesRo navigation={this.props.navigation}/>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
