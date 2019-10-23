import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Foundation } from '@expo/vector-icons';

export default class Map extends React.Component {
    static navigationOptions = {
        title: "Harta",
        tabBarColor: 'white',
        tabBarIcon:() =>  <Foundation name="map" size={28}/>

    }
    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.mapStyle} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
  