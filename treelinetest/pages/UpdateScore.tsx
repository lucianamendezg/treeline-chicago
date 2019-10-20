import React, {Component} from "react";
import {StyleSheet,View, Text, Button} from "react-native";
import {ScoreScreen} from './ScoreScreen';


export class UpdateScore extends Component{

    render(){
        return (
            <View>
                <Button
                title="IncreaseScore"
                onPress={() => ScoreScreen.updateScore("john", 5)}
                />
                <Button
                title="Decrease Score"
                onPress={() => ScoreScreen.decreaseScore(5)}
                />
            </View>
        );
    }
}