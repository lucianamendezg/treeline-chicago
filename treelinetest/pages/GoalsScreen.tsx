import React, {Component} from "react";
import {FlatList, StyleSheet,View, Text, AsyncStorage, Button, Image, ListView, ListViewComponent} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {ScoreScreen} from './ScoreScreen'



export class GoalsScreen extends Component{

    render(){
        return(
            <View style={styles.container}>
                {/* <FlatList>
                    <TouchableOpacity style={styles.item}>
                        <Text>George's Watering Hole : 5 Points</Text>
                        <Image source={require('./images/beer.jpeg')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Starbucks : 50 Points</Text>
                        <Image source={require('./images/starbucks.jpeg')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Sue's Department Store : 25 Points</Text>
                        <Image source={require('./images/hammer.jpeg')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Mike's Scarf Shop : 25 Points</Text>
                        <Image source={require('./images/hammer.jpeg')}/>
                    </TouchableOpacity>

                </FlatList> */}
                <FlatList
                    data={[
                        // {key: 'George\'s Watering Hole', price: 5,  resource: require('./images/beer.jpeg')},
                        // {key: 'Starbucks', price: 50, resource: require('./images/starbucks.jpeg')},
                        // {key: 'Sue\'s Department Store', price: 25, resource: require('./images/hammer.jpeg')},
                        // {key: 'Mike\'s Scarf Shop', price: 10, resource: require('./images/hammer.jpeg')},
                        // {key: 'J+R\'s Toy Palace', price: 30, resource: require('./images/hammer.jpeg')},
                        // {key: 'Jillie\'s Soap Dispensery', price: 70, resource: require('image!./images/hammer.jpeg')}
                        
                        {key: 'George\'s Watering Hole', price: 5,},
                        {key: 'Starbucks', price: 50},
                        {key: 'Sue\'s Department Store', price: 25,},
                        {key: 'Mike\'s Scarf Shop', price: 10,},
                        {key: 'J+R\'s Toy Palace', price: 30,},
                        {key: 'Jillie\'s Soap Dispensery', price: 70,}
                    ]}
                    renderItem={
                        ({item}) => 
                        <TouchableOpacity style={styles.item}>
                            <Text>{item.key} : {item.price} : </Text>
                            {/* <Image source={item.resource}/> */}
                            <Button
                            title="Redeem Points!"
                            onPress={() => ScoreScreen.decreaseScore(item.price)}
                            />
                        </TouchableOpacity>}
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
      padding: -15,
      fontSize: 18,
      height: 44,
    },
  })