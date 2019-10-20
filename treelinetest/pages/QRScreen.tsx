import React, {Component} from "react";
import {StyleSheet,View, Text, AsyncStorage, Button, Image} from "react-native";
import customData from './score/score.json';
import { number } from "prop-types";


export class QRScreen extends Component{

    render(){
        return (
        <View style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "stretch"
          }}>
            <Image style={{
                flex: 1,
                width: 80,
                height: 300,
                resizeMode: 'contain',
                backgroundColor: "#008000",
                padding: 2
            }}
                source={require('../pages/images/qrcode.png')}
                /> 
        </View>
        );
    }
}