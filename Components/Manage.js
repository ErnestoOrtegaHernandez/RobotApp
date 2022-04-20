import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, NavigationContainer } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Header';
import Footer from './Footer';

export default function Manage({navigation}) {
  return (
    <>
      <Header navigation = {navigation} title = {'Manage Robots'}/>
      <View style={styles.manage}>

      </View>
      <Footer/>
    </>
  );
}

const styles = StyleSheet.create({
  manage: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
