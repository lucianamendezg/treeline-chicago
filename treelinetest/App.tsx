import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { styles } from "./css/css";


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { home_screen } from './pages/HomeScreen';
import {ProfileScreen} from './pages/ProfileScreen'
import { LoginScreen } from './pages/LoginScreen';



const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen}, 
  Home: {screen: home_screen},
  Profile: {screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);


export default App;



