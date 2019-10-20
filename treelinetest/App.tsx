import React from 'react';
import { Button, StyleSheet, Text, View, } from 'react-native';
import { styles } from "./css/css";


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { home_screen } from './pages/HomeScreen';
import { LoginScreen } from './pages/LoginScreen';
import {ApiScreen} from './pages/ApiScreen';
import {ProfileScreen} from './pages/ProfileScreen';
import {Geolocation} from './pages/Geolocation';
import {FirebaseTest} from './pages/FireBaseTest';
import {MapScreen} from './pages/MapScreen';




const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen}, 
  Home: {screen: home_screen},
  Profile: {screen: ProfileScreen},
  Geo: {screen: Geolocation},
  API: {screen: ApiScreen},
  Map: {screen: MapScreen}
});

const App = createAppContainer(MainNavigator);


export default App;
