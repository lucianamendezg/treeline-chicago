import React, {Component} from "react";
import {StyleSheet,View, Text, AsyncStorage, Button, Image} from "react-native";
import customData from './score/score.json';
import { number } from "prop-types";


export class QRScreen extends Component{

    render(){
        return (
        <View>
            <Image
                source={require('../pages/images/qrcode.png')}
                /> 
        </View>
        );
    }
}