//grab points
//algorithm to _make______forests_____
//show the fucking stupid forest
import React, {Component} from 'react';
import {StyleSheet,View, Text, AsyncStorage, Image, Button} from "react-native";
import {ScoreScreen} from "./ScoreScreen";

//call static current score
export class ForestScreen extends Component {

  //functions??
  render() {
    return (
      <View>
<Image
style={{width:400,height:400}}
source={require('./images/forest.png')}
/>
    <Text style={{fontSize:20}}>
      Green Points= {ScoreScreen.current_score}
    </Text>
    </View>
render() {
    if (ScoreScreen.current_score<=5) {
      return(
        <View>

        <Image
        style={{width:400,height:400}}
        source={require('./images/bare_tree.png')}
        />

        <Text style={{fontSize:20}}>
          Green Points= {ForestScreen.forest_score}
        </Text>

    </View>
      );
    }

    else if (ScoreScreen.current_score==10) {
      return(
      <View>

      <Image
      style={{width:400,height:400}}
      source={require('./images/tree.png')}
      />

      <Text style={{fontSize:20}}>
        Green Points= {ForestScreen.forest_score}
      </Text>

      </View>
    );
    }

    else if (ScoreScreen.current_score>=15) {
      return(
      <View>

      <Image
      style={{width:400,height:400}}
      source={require('./images/forest.png')}
      />

      <Text style={{fontSize:20}}>
        Green Points= {ForestScreen.forest_score}
      </Text>

  </View>
);
    }
  }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  list:{
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff"
  }
});
