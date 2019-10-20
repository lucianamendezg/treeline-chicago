import {Button, Text, View, Image } from "react-native";
import React from 'react';
import {Props} from './HomeScreen'
import {styles} from '../css/css'
import { any, number } from "prop-types";
import ReactDOM from 'react-dom';

class ProfileScreen extends React.Component<Props> {
    static navigationOptions;

    constructor(props){
        super(props);
        this.state = {
            num: 5,
            name : JSON.stringify(this.props.navigation.getParam('name', ''))
        };
        ProfileScreen.navigationOptions = {
            title: this.state.name +"'s Profile",
          };
    }
   
    render() {
        const {navigation} = this.props;
      return (
        <View style={styles.ProfileScreen}>
            <Image
                    style={styles.coins}
                    source={require('../pages/images/user.png')}
                /> 
            <Text style={{fontSize: 30, textAlign:"center"}}>This is {this.state.name.substring(1, this.state.name.length - 1)}'s profile!</Text>
        </View>
      );
    }
  }

export {ProfileScreen}