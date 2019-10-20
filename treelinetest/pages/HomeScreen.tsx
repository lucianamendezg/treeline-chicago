import {Button, Text, View, Image,StyleSheet  } from "react-native";

import { withNavigation } from "react-navigation";
import {styles} from '../css/css'
import React from 'react';

interface Props {
    navigation: any
    // Pass data between pages using this interface
    // ex: 1 = individual's name, 2 = individual's profile number
    data: Map<Number, any>
  }

class HomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: ({tintColor}) => (
        <Image
        source={require('../pages/images/menu.png')}
        />
        ),
    };
    render() {
      return (
        <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      );
    }
  }

const home_screen = withNavigation(HomeScreen);

export {home_screen, Props};