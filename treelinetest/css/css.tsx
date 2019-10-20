import { StyleSheet, Text, View, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
      fontFamily: 'Open Sans',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    HomeScreen:{
      backgroundColor: '#0000FF',
    },
    ProfileScreen:{
      backgroundColor: '#FFFF00'
    },
    LoginScreen:{
      backgroundColor: '#98FB98',
      padding: 20,
      height: '100%'
    },
    ScoreScreen:{
      backgroundColor: '#98FB98',
      padding: 20,
      height: '100%'
    },
    input:{
      backgroundColor: '#3CB371',
      height: 40,
      marginBottom: 10,
      color: '#FFF',
      paddingHorizontal: 10
    },
    button:{
      backgroundColor: '#6B8E23',
      paddingVertical: 15
    },
    buttonText:{
      color: '#FFF',
      textAlign: 'center',
      fontWeight: '700'
    },

    logocon:{
      alignItems:'center',
      flexGrow: 1,
      justifyContent: 'center'
    },

    logo:{
      width:100,
      height:100
    },
    slogan:{
      color: '#FFF',
      marginTop: 10,
      width: 160,
      textAlign: 'center'
    },
      navItemStyle: {
        padding: 10
      },
      navSectionStyle: {
        backgroundColor: 'lightgrey'
      },
      sectionHeadingStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5
      },
      footerContainer: {
        padding: 20,
        backgroundColor: 'lightgrey'
      },
      sideMenuContainer:{

      },
      sideMenuProfileIcon:{

      },
      sideMenuIcon:{

      },
      menuText:{
        
      }
});

export {styles};