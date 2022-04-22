import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Header({navigation, title}) {

  return (
    <View style={styles.header}>
      <View style = {styles.logo}>
        <Text style = {styles.reekon} onPress = {() => navigation.navigate('MainMenu')}>REEKON</Text>
      </View>
      <View style = {styles.titleContainer}>
        <Text style = {styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    width: '100%'
  },
  logo:{
    alignItems: 'left',
  },
  titleContainer: {
    alignItems: 'center'
  },
  reekon: {
    color: '#fff',
    margin: '.25em',
    fontSize: '1.25em',
    fontWeight: 'bold'
  },
  title: {
    fontSize: '1.75em',
    color: '#fff',
    margin: '.25em',
    fontWeight: 'bold'
  }
});