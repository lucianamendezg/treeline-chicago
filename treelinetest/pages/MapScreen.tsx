import React, {Component} from "react";
import {StyleSheet,View} from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
//import {styles} from "./css/css";
//This is the token we own in the mapbox api

MapboxGL.setAccessToken("<pk.eyJ1Ijoiam9obmxpa2VhYmF3c2UiLCJhIjoiY2sxeTQwaTJxMGpnMTNicGk4YjdnYW1qZSJ9.Q0wodY6Nvt2iVxtWwbyQLQ>");

export default class MapScreen extends Component{
  componentDidMount() {
  MapboxGL.setTelemetryEnabled(false);
}

render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: "tomato"
  },
  map: {
    flex: 1
  }
});
