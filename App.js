/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Foodly from './screens/Foodly';
import GetStarted from './screens/GetStarted';
import EnterPhone from './screens/EnterPhone';



const Stack = createNativeStackNavigator();



function App() {
  return (
  
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name='Foodly' component={Foodly}   />
        <Stack.Screen name='GetStarted' component={GetStarted}  />
        <Stack.Screen name='EnterPhone' component={EnterPhone}  />
      </Stack.Navigator>


    </NavigationContainer>
   
  );
};



export default App;
