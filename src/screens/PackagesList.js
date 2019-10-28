import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import PakegesRo from "../components/PackegesRo"
import PackegesBg from "../components/PackegesBg"

export default class PackagesList extends Component {
    render() {
        const lang = this.props.navigation.getParam('lang');
        console.log(lang)
        if(lang === "ro" || lang === "en"){
            console.log("aici");
            
            return (
                <View>
                    <PakegesRo />
                </View>
            )
        } else if(lang === "bg"){
            return (
                <View>
                    <PackegesBg />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({

})
