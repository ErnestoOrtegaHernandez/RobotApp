import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { TouchableHighlight, StyleSheet, Text, View, Button, TextInput, NavigationContainer } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Header';
import Footer from './Footer';

export default function MainMenu({navigation}) {
  const [buttonColor, setButtonColor] = useState('#fff');

  useEffect(() => {
    navigation.setOptions({headerShown: false});

  }, [])



  return (
    <>
      <Header navigation = {navigation} title = {'Main Menu'}/>
      <View style={styles.container}>
        <View style = {{flexDirection:"row"}}>
          <TouchableHighlight onPress = {() => navigation.navigate('Active')}>
            <View style = {styles.buttonContainer}>
              <Text style = {styles.buttonText}>View Active Robots</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress = {() => navigation.navigate('Manage')}>
            <View style = {styles.buttonContainer} >
              <Text style = {styles.buttonText}>Manage Robots</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style = {{flexDirection:"row"}}>
          <TouchableHighlight onPress = {() => navigation.navigate('Errors')}>
            <View style = {styles.buttonContainer}>
              <Text style = {styles.buttonText}>Errors Reports</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress = {() => navigation.navigate('Summary')}>
            <View style = {styles.buttonContainer}>
              <Text style = {styles.buttonText}>Summary</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <Footer/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '15em',
    height: '5em',
    padding: '1em',
    margin: '2em',
    backgroundColor: '#fff'
  },
  buttonText: {
    fontSize: '1.25em',
    color: '#000',
    fontWeight: 'bold'
  }
});
