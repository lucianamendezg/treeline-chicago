import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Button, TouchableOpacity, RefreshControl, Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Stations from './stops.json';
import { number, string } from 'prop-types';
import { UpdateScore } from './UpdateScore';
import {ScoreScreen} from './ScoreScreen';



let getcolorb = (line) => {
  if(line == "G"){
    return "#00ff00";
  }
  if(line == "Brn"){
    return "#654321";
  }
  if(line == "Org"){
    return "#ffa500";
  }
  if(line == "Pink"){
    return "#ff69b4";
  }
  if(line == "Red"){
    return "#ff0000";
  }
  if(line == "Blue"){
    return "#0d98ba";
  }
  if(line == "P"){
    return "#800080";
  }
  else{
    return "#fff";
  }

}

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
        minStation: Stations[0].StopId
      });
      for(var index in this.state.stations){
          var curr = this.distance(yourcoords,this.state.stations[index].Location);
          if(curr <= min){
            min = curr;
            this.setState({
              minStation: this.state.stations[index].StopId,
              minimum: min
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
    latlong1 = latlong1.replace("(", "");
    latlong1 = latlong1.replace(")", "");
    latlong1 = latlong1.replace(" ", "");
    latlong1 = latlong1.split(",");
    lat1 = latlong1[0];
    long1 = latlong1[1];
    latlong2 = latlong2.replace("(", "");
    latlong2 = latlong2.replace(")", "");
    latlong2 = latlong2.replace(" ", "");
    latlong2 = latlong2.split(",");
    lat2 = latlong2[0];
    long2 = latlong2[1];
    var a = lat1 - lat2;
    var b = long1 - long2;
    var c = Math.sqrt( a*a + b*b );
    return (c);
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
    <TouchableOpacity style={{
        paddingVertical: 4,
        margin: 5,
        backgroundColor: getcolorb(data.item.rt),
        alignItems: "center"
    }}>
    <Button title={data.item.staNm} onPress={() => ScoreScreen.increaseScore(5)}/>
    <Text>{data.item.destNm}</Text>
    <Text>{data.item.arrT.split('T')[1]}</Text>
    </TouchableOpacity>



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
         keyExtractor= {item=>item.rn.toString()}
      />
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
    });
