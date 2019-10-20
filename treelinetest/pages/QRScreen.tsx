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
              <View>
              <Image style={{
                flex: 1,
                width: 360,
                height: 10,
                resizeMode: 'contain',
                backgroundColor: "#008000",
            }}
                source={require('../pages/images/qrcode.png')}
                /> 
            <Text style={{
                fontWeight: 'bold',
                fontSize: 18
            }}>Thank You For Going Green With TreeLine!</Text>
            {/* <Image style={{
                flex: 1,
                width: 80,
                height: 800,
                resizeMode: 'contain',
            }}
            source={require('../pages/images/cta.jpg')}
            /> */}

              </View>
            
        </View>
        );
    }
}