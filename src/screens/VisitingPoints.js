import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, Platform, TouchableOpacity, Linking} from 'react-native'
// import ceva from '../../assets/images/packeges/ro/p1/Manastirea_mraconia.png'
import { Col, Row, Grid } from "react-native-easy-grid";

const {width, height} = Dimensions.get('window')

const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });



// Linking.openURL(url); 


export default class VisitingPoints extends Component {
  
  render() {
    const pachet = this.props.navigation.getParam('packeg');
    if(pachet === 0){
      return (
        <Grid>
          <Col>
            <TouchableOpacity onPress={() => {
              const lat = 44.9752511;
              const lng = 22.7614033;
              const latLng = `${lat},${lng}`;
              const label = 'Podul lui Dumnezeu';
              const url = Platform.select({
                ios: `${scheme}${label}@${latLng}`,
                android: `${scheme}${latLng}(${label})`
              });
              Linking.openURL(url); 

            }}>
              <Image
                style={{height: 100, width: width / 2 - 10,}}
                resizeMode="stretch"
                source={require('../../assets/images/packeges/ro/p1/podul_lui_dumnezeu.png')}/>
              <Text>Podul lui Dumnezeu</Text>
            </TouchableOpacity>
          </Col>
          <Col>
          <TouchableOpacity onPress={() => {
              const lat = 44.6373338;
              const lng = 22.2935956;
              const latLng = `${lat},${lng}`;
              const label = 'Mănăstirea Mraconia';
              const url = Platform.select({
                ios: `${scheme}${label}@${latLng}`,
                android: `${scheme}${latLng}(${label})`
              });
              Linking.openURL(url); 

            }}>
            <Image
              style={{height: 100, width: width / 2 - 10}}
              resizeMode="stretch"
              source={require('../../assets/images/packeges/ro/p1/Manastirea_mraconia.png')}/>
              <Text>Mănăstirea Mraconia</Text>
              </TouchableOpacity>
          </Col>
        </Grid>
      );
    }else if(pachet === 1) {
      return(
        <Grid>
          <Col>
          <TouchableOpacity onPress={() => {
              const lat = 44.317208;
              const lng = 23.789623;
              const latLng = `${lat},${lng}`;
              const label = 'Muzeul de istorie';
              const url = Platform.select({
                ios: `${scheme}${label}@${latLng}`,
                android: `${scheme}${latLng}(${label})`
              });
              Linking.openURL(url); 

            }}>
              <Image
                style={{height: 100, width: width / 2 - 10,}}
                resizeMode="stretch"
                source={require('../../assets/images/packeges/ro/p2/muzeul_de_istorie.png')}/>
              <Text>Muzeul de istorie</Text>
              </TouchableOpacity>
          </Col>
          <Col>
          <TouchableOpacity onPress={() => {
              const lat = 43.247897;
              const lng = 24.021845;
              const latLng = `${lat},${lng}`;
              const label = 'Kupenite';
              const url = Platform.select({
                ios: `${scheme}${label}@${latLng}`,
                android: `${scheme}${latLng}(${label})`
              });
              Linking.openURL(url); 

            }}>
            <Image
              style={{height: 100, width: width / 2 - 10}}
              resizeMode="stretch"
              source={require('../../assets/images/packeges/ro/p2/Kupenite.png')}/>
              <Text>Kupenite</Text>
              </TouchableOpacity>
          </Col>
        </Grid>
      );
    }else if(pachet === 2) {
      return(
        <Grid>
          <Row>
          <Col>
          <TouchableOpacity onPress={() => {
              const lat = 43.398899;
              const lng = 23.222344;
              const latLng = `${lat},${lng}`;
              const label = 'Ogosta Dam';
              const url = Platform.select({
                ios: `${scheme}${label}@${latLng}`,
                android: `${scheme}${latLng}(${label})`
              });
              Linking.openURL(url); 

            }}>
              <Image
                style={{height: 100, width: width / 2 - 10,}}
                resizeMode="stretch"
                source={require('../../assets/images/packeges/ro/p3/OgostaDam.png')}/>
              <Text>Ogosta Dam</Text>
              </TouchableOpacity>
          </Col>
          <Col>
          <TouchableOpacity onPress={() => {
              const lat = 43.377876;
              const lng = 24.615395;
              const latLng = `${lat},${lng}`;
              const label = 'Park Kaylaka';
              const url = Platform.select({
                ios: `${scheme}${label}@${latLng}`,
                android: `${scheme}${latLng}(${label})`
              });
              Linking.openURL(url); 

            }}>
            <Image
              style={{height: 100, width: width / 2 - 10}}
              resizeMode="stretch"
              source={require('../../assets/images/packeges/ro/p3/park_kaylaka.png')}/>
              <Text>Park Kaylaka</Text>
              </TouchableOpacity>
          </Col>
          </Row>
          <Row>
          <Col>
          <TouchableOpacity onPress={() => {
              const lat = 43.344532;
              const lng = 24.532953;
              const latLng = `${lat},${lng}`;
              const label = 'Chernelka';
              const url = Platform.select({
                ios: `${scheme}${label}@${latLng}`,
                android: `${scheme}${latLng}(${label})`
              });
              Linking.openURL(url); 

            }}>
            <Image
              style={{height: 100, width: width / 2 - 10}}
              resizeMode="stretch"
              source={require('../../assets/images/packeges/ro/p3/Chernelka.png')}/>
              <Text>Chernelka</Text>
              </TouchableOpacity>
          </Col>
          <Col>
          <TouchableOpacity onPress={() => {
              const lat = 44.930205;
              const lng = 25.460558;
              const latLng = `${lat},${lng}`;
              const label = 'History Museum';
              const url = Platform.select({
                ios: `${scheme}${label}@${latLng}`,
                android: `${scheme}${latLng}(${label})`
              });
              Linking.openURL(url); 

            }}>
            <Image
              style={{height: 100, width: width / 2 - 10}}
              resizeMode="stretch"
              source={require('../../assets/images/packeges/ro/p3/history_museum.png')}/>
              <Text>History Museum</Text>
              </TouchableOpacity>
          </Col>
          </Row>
        </Grid>
      );
    }else{
      return(
        <Grid>
          <Row>
          <Col>
          <TouchableOpacity onPress={() => {
              const lat = 43.994324;
              const lng = 22.932392;
              const latLng = `${lat},${lng}`;
              const label = 'Muzeul de arta si etnografie Calafat';
              const url = Platform.select({
                ios: `${scheme}${label}@${latLng}`,
                android: `${scheme}${latLng}(${label})`
              });
              Linking.openURL(url); 

            }}>
              <Image
                style={{height: 100, width: width / 2 - 10,}}
                resizeMode="stretch"
                source={require('../../assets/images/packeges/ro/p4/muzeul_de_arta_calafat.jpg')}/>
              <Text>Muzeul de arta si etnografie Calafat</Text>
              </TouchableOpacity>
          </Col>
          <Col>
          <TouchableOpacity onPress={() => {
              const lat = 44.622521;
              const lng = 22.655637;
              const latLng = `${lat},${lng}`;
              const label = 'Cetatea Medievala a Severinului';
              const url = Platform.select({
                ios: `${scheme}${label}@${latLng}`,
                android: `${scheme}${latLng}(${label})`
              });
              Linking.openURL(url); 

            }}>
            <Image
              style={{height: 100, width: width / 2 - 10}}
              resizeMode="stretch"
              source={require('../../assets/images/packeges/ro/p4/cetatea_medievala_a_severinului.png')}/>
              <Text>Cetatea Medievala a Severinului</Text>
              </TouchableOpacity>
          </Col>
          </Row>
          <Row>
          <Col>
          <TouchableOpacity onPress={() => {
              const lat = 43.194950;
              const lng = 23.287746;
              const latLng = `${lat},${lng}`;
              const label = 'Galeriile de arta din Varshets';
              const url = Platform.select({
                ios: `${scheme}${label}@${latLng}`,
                android: `${scheme}${latLng}(${label})`
              });
              Linking.openURL(url); 

            }}>
            <Image
              style={{height: 100, width: width / 2 - 10}}
              resizeMode="stretch"
              source={require('../../assets/images/packeges/ro/p4/galeriile.png')}/>
              <Text>Galeriile de arta din Varshets</Text>
              </TouchableOpacity>
          </Col>
          <Col>
          <TouchableOpacity onPress={() => {
              const lat = 49.090904;
              const lng = 19.407839;
              const latLng = `${lat},${lng}`;
              const label = 'Poiana Ivanchova';
              const url = Platform.select({
                ios: `${scheme}${label}@${latLng}`,
                android: `${scheme}${latLng}(${label})`
              });
              Linking.openURL(url); 

            }}>
            <Image
              style={{height: 100, width: width / 2 - 10}}
              resizeMode="stretch"
              source={require('../../assets/images/packeges/ro/p4/PoianaIvanchova.png')}/>
              <Text>Poiana Ivanchova</Text>
              </TouchableOpacity>
          </Col>
          </Row>
        </Grid>
      );
    }
  }
}

const styles = StyleSheet.create({

  });
