import  React, {useState} from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

const number_of_items = 1000;

function generateMoreItems(array = [
    {
        id: ''+0,
        person: `Person ${0}`,
    }
]) {
    let length = array.length;
    for(let i = length; i< length + number_of_items; i++) {
        let obj = {
            id: ''+i,
            person: `Person ${i}`,
        }
        array.push(obj);
    }
    return array;
}

export default Scenario_3 = (navigation) => {
    const [item_list, MoreItems] = useState(generateMoreItems())
    return (
        <View>
            <FlatList 
            data={item_list}
            onEndReached={()=>generateMoreItems(item_list)}
            renderItem={({item}) => {
                return (
                    <View style={{flex:1, alignItems: 'center', marginVertical: '1%', marginHorizontal: '1%'}}>
                        <Text adjustsFontSizeToFit numberOfLines={1} style={{fontSize: 20}}>{item.person}</Text>
                    </View>
                )
            }}
            />
        </View>
    )
}