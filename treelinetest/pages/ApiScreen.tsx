import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';

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
