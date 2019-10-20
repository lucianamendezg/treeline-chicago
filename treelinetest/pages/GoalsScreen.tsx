import React, {Component} from "react";
import {FlatList, StyleSheet,View, Text, AsyncStorage, Button, Image, ListView, ListViewComponent} from "react-native";



export class GoalsScreen extends Component{

    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'Pete\'s Cofee'},
                        {key: 'Starbucks'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                    />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })