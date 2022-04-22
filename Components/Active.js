import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState}from 'react';
import { StyleSheet, Text, View, Button, TextInput, NavigationContainer } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Header';
import Footer from './Footer';

export default function Active({navigation}) {

  useEffect(() => {
    navigation.setOptions({headerShown: false});

  }, [])

  return (
    <>
      <Header navigation = {navigation} title = {'Active Robots'}/>
      <View style={styles.active}>
      </View>
      <Footer/>
    </>
  );
}


const styles = StyleSheet.create({
  active: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
