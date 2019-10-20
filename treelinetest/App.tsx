import React from 'react';
import { Button, StyleSheet, Text, View, } from 'react-native';
import { styles } from "./css/css";


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {LoginScreen} from './pages/LoginScreen';
import {home_screen } from './pages/HomeScreen';
import { LoginScreen } from './pages/LoginScreen';
import {ApiScreen} from './pages/ApiScreen';
import {ProfileScreen} from './pages/ProfileScreen';
import {Geolocation} from './pages/Geolocation';
import {MapScreen} from './pages/MapScreen';


const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Home: {screen: home_screen},
  Profile: {screen: ProfileScreen},
<<<<<<< HEAD
  Geo: {screen: Geolocation},
  API: {screen: ApiScreen},
=======
  Api: {screen: ApiScreen},
  Geo: {screen: Geolocation}
  Firebase: {screen: AddItem},
>>>>>>> 3592c13caaac34ac6bd66f317c1304f0128ba4e9
  Map: {screen: MapScreen}
});

const App = createAppContainer(MainNavigator);


export default App;
