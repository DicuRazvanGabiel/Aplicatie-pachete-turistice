import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import PackegesContainer from "../navigation/ContentNavigation";
import HeaderLogosRo from "../components/HeaderLogosRo";
import DisclamerRo from "../components/DisclamerRo"
import HeaderLogosEn from "../components/HeaderLogosEN"
import HeaderLogosBg from "../components/HeaderLogosBg"
import DisclamerEn from "../components/DisclamerEn"
import DisclamerBg from "../components/DisclamerBg"

export default class MainScreenContainer extends Component {
    render() {
        const lang = this.props.navigation.getParam('lang');
        
        if(lang === "ro"){
            return (
                <View style={styles.container}>
                    <HeaderLogosRo />
                    <PackegesContainer screenProps={lang}/>
                    <DisclamerRo />
                </View>
            )
        } else if(lang === "bg"){
            return (
                <View style={styles.container}>
                    <HeaderLogosBg />
                    <PackegesContainer screenProps={lang}/>
                    <DisclamerBg />
                </View>
            )
        } else if(lang === "en"){
            return (
                <View style={styles.container}>
                    <HeaderLogosEn />
                    <PackegesContainer screenProps={lang}/>
                    <DisclamerEn />
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
