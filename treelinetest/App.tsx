import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { styles } from "./css/css";


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { home_screen } from './pages/HomeScreen';
import {ApiScreen} from './pages/ApiScreen';
import {ProfileScreen} from './pages/ProfileScreen';
import {FirebaseTest} from './pages/FireBaseTest';

import {MapScreen} from './pages/MapScreen';



const MainNavigator = createStackNavigator({
  Home: {screen: home_screen},
  Profile: {screen: ProfileScreen},
  API: {screen: ApiScreen},
  Firebase: {screen: AddItem},
  Map: {screen: MapScreen}
});

const App = createAppContainer(MainNavigator);


export default App;
