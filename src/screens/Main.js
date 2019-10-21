import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Center } from "@builderx/utils";
import MaterialIconButtonsFooter1 from "../components/MaterialIconButtonsFooter1";
import MaterialMapView1 from "../components/MaterialMapView1";

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rect}>
          <View
            style={[
              styles.stack,
              {
                height: 812
              }
            ]}
          >
            <Center horizontal>
              <MaterialIconButtonsFooter1
                style={styles.materialIconButtonsFooter1}
              />
            </Center>
            <MaterialMapView1 style={styles.materialMapView1} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    backgroundColor: "rgba(230, 230, 230,1)",
    flex: 1
  },
  stack: {
    position: "relative"
  },
  materialIconButtonsFooter1: {
    width: 375,
    height: 56,
    position: "absolute",
    bottom: 0
  },
  materialMapView1: {
    top: 0,
    left: 0,
    height: 757,
    position: "absolute",
    right: 0
  }
});
