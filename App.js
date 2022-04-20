import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Components/Home';
import MainMenu from './Components/MainMenu';
import Manage from './Components/Manage';
import Active from './Components/Active';
import Errors from './Components/Errors';
import Summary from './Components/Summary';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name ="MainMenu" component = {MainMenu}/>
        <Stack.Screen name ="Manage" component = {Manage}/>
        <Stack.Screen name ="Active" component = {Active}/>
        <Stack.Screen name ="Errors" component = {Errors}/>
        <Stack.Screen name ="Summary" component = {Summary}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;