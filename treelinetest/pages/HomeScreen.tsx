import React from 'react';
 
import { View, Text } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { withNavigation } from "react-navigation";
 
class HomeScreen extends React.PureComponent {
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
    const {navigate} = this.props.navigation;
    return (
      <View style={
        { alignSelf: 'flex-end', justifyContent: 'center',
        position: 'absolute' }}>
        <Menu
          ref={this.setMenuRef}
          button={<Text onPress={this.showMenu}>Show menu</Text>}
        >
          <MenuItem onPress={() => {
            this.hideMenu;
            navigate('Profile', {name: 'Jane'})}}>My Profile</MenuItem>
            
          <MenuItem onPress={() =>{
            this.hideMenu;
            navigate('Score')
            }}>My Score</MenuItem>

          <MenuItem onPress={() =>{
            this.hideMenu;
            navigate('Map');
            }}>Map</MenuItem>

          <MenuItem onPress={() =>{
            this.hideMenu;
            navigate('QR');
            }}>QR Code
          </MenuItem>
        </Menu>
      </View>
    );
  }
}
 
export {HomeScreen};