import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native'

const {width, height} = Dimensions.get('window')

export default class PackegesRo extends Component {

    changeScreen = (packeg) => {
        this.props.navigation.navigate('VisitingPoints', {
            packeg
        });
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <TouchableOpacity onPress={() => this.changeScreen(0)} > 
                    <View style={styles.packege}>
                        <Image
                            style={{height: 200, width: width - 10}}
                            resizeMode="stretch"
                            source={require('../../assets/images/packeges/ro/p1/podul_lui_dumnezeu.png')}/>
                        <Text>Pachet 1</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.changeScreen(1)} > 
                    <View style={styles.packege}>
                        <Image
                            style={{height: 200, width: width - 10}}
                            resizeMode="stretch"
                            source={require('../../assets/images/packeges/ro/p2/Kupenite.png')}/>
                        <Text>Pachet 2</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.changeScreen(2)} > 
                    <View style={styles.packege}>
                        <Image
                            style={{height: 200, width: width - 10}}
                            resizeMode="stretch"
                            source={require('../../assets/images/packeges/ro/p3/OgostaDam.png')}/>
                        <Text>Pachet 3</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.changeScreen(3)} > 
                    <View style={styles.packege}>
                        <Image
                            style={{height: 200, width: width - 10}}
                            resizeMode="stretch"
                            source={require('../../assets/images/packeges/ro/p4/muzeul_de_arta_calafat.jpg')}/>
                        <Text>Pachet 4</Text>
                    </View>
                </TouchableOpacity>
                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        alignItems: 'center',
        width: '100%',
    },
    packege: {
        alignItems: 'center',
        height: 200,
        width: '100%',
        margin: 10,
    }
})
