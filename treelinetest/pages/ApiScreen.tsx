import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export class ApiScreen extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }
  componentDidMount(){
    return fetch('http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=e66c07d2df874365bf4c7c73efda651b&mapid=41450&outputType=JSON')
    .then((response)=>response.json())
    .then((responseJson)=> {
      this.setState({
        isLoading: false,
        dataSource: responseJson.eta,
        })
      })
    .catch((error)=>{
      console.log(error)
    });

  }


  render(){
    if (this.state.isLoading){
      return(
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    }
    else{
        let trains = this.state.dataSource.map((val, key)=>{
          return <View key={key} style={styles.item}>
              <Text>{val.rt}</Text>
            </View>
        });

      return (
        <View style={styles.container}>
            {trains}
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
    flex: 1,
    alignSelf: 'stretch',
    margin: 10,
    alignItems: 'center',
    borderBottomWidth:1,
    borderBottomColor: '#eee'
  }
});
