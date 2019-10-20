import React from 'react';


import { View, Text, TouchableHighlight, Image, StyleSheet,TextInput, Button,TouchableOpacity } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import {styles} from '../css/css'
import { withNavigation } from "react-navigation";

interface Props {
  navigation: any
  // Pass data between pages using this interface
  // ex: 1 = individual's name, 2 = individual's profile number
  data: Map<Number, any>
}

class HomeScreen extends React.PureComponent {
  static navigationOptions = {
    headerLeft: null
  };
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {
    console.disableYellowBox = true;
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.menu}>
        <View style={styles.menucon}>
        <Menu
          ref={this.setMenuRef}
          button={<Text onPress={this.showMenu} style={{
            fontSize: 20, paddingTop: 20
          }}>Menu</Text>}
        >
          <MenuItem onPress={() => {
            this.hideMenu;
            navigate('Profile', {name: 'Jane'})}}>My Profile</MenuItem>

          {/* <MenuItem onPress={() =>{
            this.hideMenu;
            navigate('Score')
            }}>My Score</MenuItem> */}

          <MenuItem onPress={() =>{
            this.hideMenu;
            navigate('Map')
            }}>Map</MenuItem>
            <MenuItem onPress={() =>{
              this.hideMenu;
              navigate('Forest');
            }}>Score</MenuItem>
          <MenuItem onPress={() =>{
            this.hideMenu;
            navigate('QR')
            }}>QR Code
          </MenuItem>

          {/* <MenuItem onPress={() =>{
            navigate('Api');
            }}>Api</MenuItem> */}

            <MenuItem onPress={() =>{
            navigate('Goals');
            }}>Reedem Points</MenuItem>
        </Menu>
        <View style={styles.home}>
        <Image
          style={styles.homeTree}
          source={require('../pages/images/tree.png')}
                />
        <View style={styles.buttonclick}>
        <TouchableOpacity onPress={() => {navigate('Score')}
                } style={styles.buttonclick}>
                <Text style={styles.buttonText}>My Score</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigate('Api')}
                } style={styles.buttonclick}>
                <Text style={styles.buttonText}>Trains</Text>
        </TouchableOpacity>
         </View>
        </View>
        </View>


      </View>
    );
  }
}

export {HomeScreen};
