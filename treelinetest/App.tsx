import React from 'react';
import { Button, StyleSheet, Text, View, } from 'react-native';
import { styles } from "./css/css";


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {LoginScreen} from './pages/LoginScreen';
import {home_screen } from './pages/HomeScreen';
import {ApiScreen} from './pages/ApiScreen';
import {ProfileScreen} from './pages/ProfileScreen';
import {Geolocation} from './pages/Geolocation';


const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Home: {screen: home_screen},
  Profile: {screen: ProfileScreen},
  Api: {screen: ApiScreen},
  Geo: {screen: Geolocation}
});

const App = createAppContainer(MainNavigator);


export default App;
