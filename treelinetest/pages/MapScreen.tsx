import React, {Component} from "react";
import {StyleSheet,View, Text} from "react-native";
//import {styles} from "./css/css";
//This is the token we own in the mapbox api

export class MapScreen extends Component{
  componentDidMount() {
}

render() {
    return (
      <View style={styles.page}>
        <Text style={{fontWeight: 'bold', fontSize: 20 }}>
          UNDER CONSTRUCTION</Text>
        <View style={styles.container}>
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
