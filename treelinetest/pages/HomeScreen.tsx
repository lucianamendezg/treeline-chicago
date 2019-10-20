import {Button, Text, View } from "react-native";

import { withNavigation } from "react-navigation";
import {styles} from '../css/css'
import React from 'react';

interface Props {
    navigation: any
    // Pass data between pages using this interface
    // ex: 1 = individual's name, 2 = individual's profile number
    data: Map<Number, any>
  }

class HomeScreen extends React.Component<Props> {
    static navigationOptions = {
      
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.HomeScreen}>
            <Button
            title="Go to Jane's profile"
            onPress={() => navigate('Profile', {name: 'Jane'})}
            />
            <Button
            title="API Tester"
            onPress={() => navigate('Api')}
            />
            <Button
            title="Geolocation"
            onPress={() => navigate('Geo')}
            />
        </View>
      );
    }
  }

const home_screen = withNavigation(HomeScreen);

export {home_screen, Props};
