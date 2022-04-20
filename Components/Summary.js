import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, NavigationContainer } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Header';
import Footer from './Footer';

export default function Summary({navigation}) {
  return (
    <>
      <Header navigation = {navigation} title = {'Summary'}/>
      <View style={styles.summary}>

      </View>
      <Footer/>
    </>
  );
}

const styles = StyleSheet.create({
  summary: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
