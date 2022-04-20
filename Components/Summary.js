import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, NavigationContainer } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Summary() {
  return (
    <View style={styles.container}>
      <Text>REEKON</Text>
      <TextInput placeholder = "Username"/>
      <TextInput secureTextInput = {true} placeholder = "Password"/>
      <Button title = "Login" onPress = {()=> 5}/>
      <Button title = "SignUP" onPress = {()=> 5}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
