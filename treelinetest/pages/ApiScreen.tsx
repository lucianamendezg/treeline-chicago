import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import stops from './stops.json';

export class ApiScreen extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataSource: []
    }
  }
  componentDidMount(){
    return fetch('http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=e66c07d2df874365bf4c7c73efda651b&mapid=40380&outputType=JSON')
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
    <Text>{data.item.rn}</Text></TouchableOpacity>


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
      list:{
        paddingVertical: 4,
        margin: 5,
        backgroundColor: "#fff"
      }
    });
