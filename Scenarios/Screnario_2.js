import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const text_first = "🌞 I am a first slightly bigger screen made to test a Perfomance when two Stack navigation screens change" 
const text_second  = "🌘 I am a second slightly bigger screen made to test a Perfomance when two Stack navigation screens change" 

const Stack = createStackNavigator();

const Screen_one = (navigation) => {
    console.log("Navigation: ", navigation.navigation)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text style={{textAlign: 'center'}}>{text_first}</Text>
          <Button title='Change to the second screen 🌘'
          onPress={
              () => navigation.navigation.push('screen_two')
          }
          />
        </View>
      );
}

const Screen_two = (navigation) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text style={{textAlign: 'center'}}>{text_second}</Text>
          <Button title='Change to the first screen 🌞'
          onPress={
              () => navigation.navigation.pop()
          }
          />
        </View>
      );
}

const Root = () => {
    return (
      <Stack.Navigator initialRouteName="Activity0" >
        <Stack.Screen name="screen_one"   component={Screen_one}/>
        <Stack.Screen name="screen_two"   component={Screen_two}/>
      </Stack.Navigator>
    )
  }
  
  export default function Scenario_2() {
    return (
      <NavigationContainer independent={true}>
        {Root()}
      </NavigationContainer>
    );
  }