import * as React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {Scenario_1, Scenario_2, Scenario_3} from "./Scenarios/Shard_Scenario_Export";

const Stack = createStackNavigator();

function Next_testcase_button (navigation, next_screen_name) {
  return (
      <SafeAreaView style={{width: '100%', backgroundColor: 'blue'}}>
          <Button title='Next testcase' 
          onPress ={
            () => navigation.navigate(next_screen_name)
          }/>  
      </SafeAreaView>
  )
}

const screen_options = (navigation, next_screen_name) => { 
  return {
    header: () => Next_testcase_button(navigation, next_screen_name),
  }
}


const Root = () => {
  return (
    <Stack.Navigator initialRouteName="Activity0" >
      <Stack.Screen name="scenario_one"   component={Scenario_1} options={({navigation}) => screen_options(navigation, "scenario_two")}/>
      <Stack.Screen name="scenario_two"   component={Scenario_2} options={({navigation}) => screen_options(navigation, "scenario_three")}/>
      <Stack.Screen name="scenario_three" component={Scenario_3} options={({navigation}) => screen_options(navigation, "scenario_one")}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      {Root()}
    </NavigationContainer>
  );
}