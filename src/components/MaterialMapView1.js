import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { MapView } from "expo";

export default class MaterialMapView1 extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <MapView customMapStyle={"undefined"} style={styles.MapView1} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  MapView1: {
    flex: 1,
    backgroundColor: "rgb(230,230,230)"
  }
});
