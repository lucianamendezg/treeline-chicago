import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableOpacity, RefreshControl, Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Stations from './stops.json';
import { number, string } from 'prop-types';

export class ApiScreen extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      stations : Stations,
      isLoading: true,
      location: null,
      minStation: 10000,
      dataSource: [],
      url: ''
    }

   
  }
  componentDidMount(){
    /*
    var min = 10000;
    var minStation;
    var yourcoords = JSON.stringify("(" + this.state.location.coords.longitude + ", " + this.state.location.coords.latitude + ")");
    for(var key in stops){
      var dist = this.distance(yourcoords, key.Location);
      if( dist < min ){
        min = dist;
        minStation = key.StopId;
      }
    }
    */
   if (Platform.OS === 'android' && !Constants.isDevice) {
    this.setState({
      errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
    });
  } else {
    this._getLocationAsync().then(() => {
      var min = 10000;
      var yourcoords = (this.state.location.coords.latitude + ", " + this.state.location.coords.longitude );
      //this.state.minStation = yourcoords;
      this.setState({
        minStation: this.state.stations[0].StopId
      });
      for(var index in this.state.stations){
          var curr = this.distance(yourcoords,this.state.stations[index].Location);
          if(curr <= min){
            min = curr;
            this.setState({
              minStation: this.state.stations[index].StopId
            });
          }
      }
      var urlvar= 'http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=e66c07d2df874365bf4c7c73efda651b&mapid=' + this.state.minStation.toString() + '&outputType=JSON'
      return fetch(urlvar)
    .then((response)=>response.json())
    .then((responseJson)=> {
      this.setState({
        isLoading: false,
        dataSource: responseJson.ctatt.eta,
        })
      })
    .catch((error)=>{
      console.log(error)
    });
    }).catch((error)=>{
      console.log(error)

    });
  }
    
  }

  distance(latlong1, latlong2){
      //cleaning the data
      latlong1 = latlong1.replace("(", "");
      latlong1 = latlong1.replace(")", "");
      latlong1 = latlong1.replace(" ", "");
      latlong1 = latlong1.split(",");

      lat1 = Number(latlong1[0]);
      long1 = Number(latlong1[1]);

      //cleaning the data
      latlong2 = latlong2.replace("(", "");
      latlong2 = latlong2.replace(")", "");
      latlong2 = latlong2.replace(" ", "");
      latlong2 = latlong2.split(",");

      lat2 = latlong2[0];
      long2 = latlong2[1];

      //Calculating the geodesic distance in type s c r i p t
      radius=6371;

      //Calculations
      degree_lat=(lat2-lat1)(Math.PI/180);
      degree_lon=(long2-long1)(Math.PI/180);
      lat_1=lat1Math.PI/180;
      lat_2=lat2Math.PI/180;

      //Calculations ++
      a= Math.sin(degree_lat/2) * Math.sin(degree_lat/2) + Math.sin(degree_lon/2) * Math.sin(degree_lon/2) * Math.cos(lat_1) * Math.cos(lat_2);
      b=2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      c=radius * b;
      return c;
    }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  FlatListItemSeparator = () => {
    return (
      <View style={{
         height: .5,
         width:"100%",
         backgroundColor:"rgba(0,0,0,0.5)",
    }}
    />
    );
    }
    renderItem=(data)=>
    <TouchableOpacity style={styles.list}>
    <Text>{data.item.staNm}</Text></TouchableOpacity>


  render(){

    if (this.state.isLoading){
      return(
        <View style={styles.loader}>
          <ActivityIndicator />
        </View>
      )
    }
    return(
      <View style={styles.container}>
      <FlatList
         data= {this.state.dataSource}
         ItemSeparatorComponent = {this.FlatListItemSeparator}
         renderItem= {item=> this.renderItem(item)}
         keyExtractor= {item=>item.staNm.toString()}
      />
      <Text>bhsdbgjsdhgbj {this.state.minStation}</Text>
      <Text>bhsdbgjsdhgbj {this.state.url}</Text>
     </View>
      );

    }
}

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff"
      },
      loader:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
      },
      list:{
        paddingVertical: 4,
        margin: 5,
        backgroundColor: "#fff"
      }
    });
