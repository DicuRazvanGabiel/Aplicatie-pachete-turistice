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
        console.log(lang);
        
        if(lang === "ro"){
            return (
                <View style={styles.container}>
                    <HeaderLogosRo />
                    <PackegesContainer />
                    <DisclamerRo />
                </View>
            )
        } else if(lang === "bg"){
            return (
                <View>
                    <HeaderLogosBg />
                    <PackegesContainer />
                    <DisclamerBg />
                </View>
            )
        } else if(lang === "en"){
            return (
                <View>
                    <HeaderLogosEn />
                    <PackegesContainer />
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
