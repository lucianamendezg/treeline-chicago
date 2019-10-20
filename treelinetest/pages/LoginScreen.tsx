import {StyleSheet, Button, Image, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, KeyboardAvoidingViewComponent} from "react-native";
import {styles} from '../css/css'
import React from 'react';

export default class LoginScreen extends React.Component {
    render() {
      const {navigate} = this.props.navigation;
      return (
        <KeyboardAvoidingView behavior="padding" style={styles.LoginScreen}>
            <View style ={styles.logocon}>
                <Image
                    style={styles.logo}
                    source={require('../pages/images/tree.png')}
                /> 
                <Text style={styles.slogan}>An app to go Green</Text>
            </View>
            <TextInput
                placeholder="email"
                placeholderTextColor= '#FFF'
                returnKeyType="next"
                keyboardType='email-address'
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
            />
            <TextInput
                placeholder = "pasword"
                placeholderTextColor= '#FFF'
                returnKeyType="go"
                secureTextEntry
                style={styles.input}
            />
            <TouchableOpacity onPress={() => {
                navigate('Home')}
                
                } style={styles.button}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
      );
    }
  }
export {LoginScreen};