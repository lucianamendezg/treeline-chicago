import {Button, Text, View } from "react-native";
import React from 'react';
import {Props} from './HomeScreen'
import {styles} from '../css/css'

class ProfileScreen extends React.Component<Props> {
    static navigationOptions = {
      title: '__s Profile',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.ProfileScreen}>
            <Text>This is jane's profile!</Text>
        </View>
      );
    }
  }

export {ProfileScreen}