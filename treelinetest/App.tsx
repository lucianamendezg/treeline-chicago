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
import {ForestScreen} from './pages/ForestScreen';
import {QRScreen} from './pages/QRScreen';
<<<<<<< HEAD
import {ForestScreen} from './pages/ForestScreen'
=======
import { GoalsScreen } from './pages/GoalsScreen';
>>>>>>> 09af2fd903f1dd18a48166c8d9e56e00586212fd


const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
  Api: {screen: ApiScreen},
  Geo: {screen: Geolocation},
  Map: {screen: MapScreen},
  Score: {screen: ScoreScreen},
  Update: {screen: UpdateScore},
<<<<<<< HEAD
  QR: {screen: QRScreen},
  ForestScreen: {screen: ForestScreen}
=======
  Forest: {screen: ForestScreen},
  QR: {screen: QRScreen},
  Goals: {screen: GoalsScreen}
>>>>>>> 09af2fd903f1dd18a48166c8d9e56e00586212fd
});

const App = createAppContainer(MainNavigator);


export default App;
