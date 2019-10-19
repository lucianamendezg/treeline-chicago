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
    return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response)=>response.json())
    .then((responseJson)=> {
      this.setState({
        isLoading: false,
        dataSource: responseJson.movies,
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
    <Text>{data.item.title}</Text></TouchableOpacity>


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
         keyExtractor= {item=>item.id.toString()}
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
