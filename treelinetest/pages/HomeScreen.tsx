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

        <View style={styles.HomeScreen}>
            <Button
            title="Go to Jane's profile??"
            onPress={() => navigate('Profile', {name: 'Jane'})}
            />
            <Button
            title="API Tester"
            onPress={() => navigate('ApiScreen')}
            />
            <Button
              title="Test Firebase"
              onPress={()=>navigate('Firebase')}
            />
        </View>
      );
    }
}

const home_screen = withNavigation(HomeScreen);

export {home_screen, Props};
