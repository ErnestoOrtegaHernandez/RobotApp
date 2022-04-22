import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState}from 'react';
import { StyleSheet, Text, View, Button, TextInput, NavigationContainer, Image } from 'react-native';
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
        <View style = {styles.infoBar}>
          <View style = {{flexDirection:"row", flex: 1}}>
            <Text style = {styles.robotNumber}>1 </Text>
            <View style = {{flexDirection: "column",  alignItems: 'left'}}>
              <Text style = {styles.infoText}>Task: Unload</Text>
              <Text style = {styles.infoText}>Completion: 43%</Text>
            </View>
          </View>
          <View style = {{flexDirection:"row", flex: 1}}>
            <Text style = {styles.robotNumber}>2 </Text>
            <View style = {{flexDirection: "column", alignItems: 'left'}}>
              <Text style = {styles.infoText}>Task: Assemble</Text>
              <Text style = {styles.infoText}>Completion: 53%</Text>
            </View>
          </View>
        </View>

        <View style = {styles.floorPlanContainer}>
          <Image source={require("./floorplan.png")} style ={styles.image}/>
        </View>
      </View>
      <Footer/>
    </>
  );
}


const styles = StyleSheet.create({
  active: {
    flex: 1,
    alignItems: 'left',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  infoBar: {
    padding: '1em',
    height: '100%',
    flex: 3,
    backgroundColor: '#000',
  },
  floorPlanContainer: {
    padding: '1em',
    height: '100%',
    flex: 6,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: 'contain'
  },
  robotNumber: {
    fontSize: '2em',
    color: '#fff',
    fontWeight: 'bold',
    // justifyContent: 'center',
    alignItems: 'center'
  },
  infoText: {
    fontSize: '1em',
    color: '#fff'
  }
});
