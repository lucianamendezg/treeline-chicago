import React, {Component} from "react";
import {StyleSheet,View, Text, AsyncStorage, Button, Image} from "react-native";
import customData from './score/score.json';
import { number } from "prop-types";
import {styles} from '../css/css'



export class ScoreScreen extends Component{

    static current_score = 5;


    static increaseScore(increase){
        ScoreScreen.current_score += increase;
    }

    static decreaseScore(decrease){
        ScoreScreen.current_score -= decrease;
    }

    render(){
        return (
            <View style={{backgroundColor: '#b2b2ff', height: '100%'}}>
            <Image
                    style={styles.me}
                    source={require('../pages/images/coins.png')}
                /> 
            <Text style={{fontSize: 40, textAlign:"center", }}>Current Score: {ScoreScreen.current_score}</Text>
        </View>
      
        );
    }
}
