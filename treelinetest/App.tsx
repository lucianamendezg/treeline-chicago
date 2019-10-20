import React from 'react';
import { Button, StyleSheet, Text, View, } from 'react-native';
import { styles } from "./css/css";


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {LoginScreen} from './pages/LoginScreen';
import {HomeScreen } from './pages/HomeScreen';
import {ApiScreen} from './pages/ApiScreen';
import {ProfileScreen} from './pages/ProfileScreen';
import {Geolocation} from './pages/Geolocation';
import {MapScreen} from './pages/MapScreen';
import { ScoreScreen } from './pages/ScoreScreen';
import { UpdateScore } from './pages/UpdateScore';
import {QRScreen} from './pages/QRScreen';
import { GoalsScreen } from './pages/GoalsScreen';


const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
  Api: {screen: ApiScreen},
  Geo: {screen: Geolocation},
  Map: {screen: MapScreen},
  Score: {screen: ScoreScreen},
  Update: {screen: UpdateScore},
  QR: {screen: QRScreen},
  Goals: {screen: GoalsScreen}
});

const App = createAppContainer(MainNavigator);


export default App;
