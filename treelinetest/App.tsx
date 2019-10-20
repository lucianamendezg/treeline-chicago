import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { styles } from "./css/css";


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { home_screen } from './pages/HomeScreen';
import {ProfileScreen} from './pages/ProfileScreen';
import {MapScreen} from './pages/MapScreen';



const MainNavigator = createStackNavigator({
  Home: {screen: home_screen},
  Profile: {screen: ProfileScreen},
  Map: {screen: MapScreen}
});

const App = createAppContainer(MainNavigator);


export default App;
