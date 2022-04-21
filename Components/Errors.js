import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { TouchableHighlight, StyleSheet, Text, View, Button, TextInput, NavigationContainer, ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Header';
import Footer from './Footer';
import TriangleSymbol from './TriangleSymbols';
import ErrorEntry from './ErrorEntry';

export default function Errors({navigation}) {
  const [errorDetails, setErrorDetails] = useState([]);

  const getErrorReport = () => {
    fetch('http://localhost:3000/errors', {
      mode: 'cors'
    })
    .then(res => res.json())
    .then(data => setErrorDetails(data))
    .catch(err => console.log(err));
  }

  useEffect(() => {
    getErrorReport();

  }, [])

  console.log(errorDetails);

  return (
    <>
      <Header navigation = {navigation} title = {'Error Reports'}/>
      <View style={styles.error}>
        <View style = {{flexDirection:"row"}}>
          <View style = {styles.column}>
            <Text style = {styles.header}>Robot ID</Text>
            <TouchableHighlight>
              <TriangleSymbol up = {true}/>
            </TouchableHighlight>
            <TouchableHighlight>
              <TriangleSymbol up = {false}/>
            </TouchableHighlight>
          </View>
          <View style = {styles.column}>
            <Text style = {styles.header}>Error Type</Text>
            <TouchableHighlight>
              <TriangleSymbol up = {true}/>
            </TouchableHighlight>
            <TouchableHighlight>
              <TriangleSymbol up = {false}/>
            </TouchableHighlight>
          </View>
          <View style = {styles.column}>
            <Text style = {styles.header}>Date/Time</Text>
            <TouchableHighlight>
              <TriangleSymbol up = {true}/>
            </TouchableHighlight>
            <TouchableHighlight>
              <TriangleSymbol up = {false}/>
            </TouchableHighlight>
          </View>
          <View style = {styles.column}>
            <Text style = {styles.header}>Task</Text>
            <TouchableHighlight>
              <TriangleSymbol up = {true}/>
            </TouchableHighlight>
            <TouchableHighlight>
              <TriangleSymbol up = {false}/>
            </TouchableHighlight>
          </View>
        </View>
        <ScrollView>
          {errorDetails.length > 0 ? errorDetails.map((robot, index) => {
            return robot.errors.map((error, index) => {
              return <ErrorEntry key = {index} id = {robot.robotId} type = {error.type} date = {error.date} task = {error.task} />
            })
          }) : <Text>No errors to report</Text>}
        </ScrollView>
      </View>
      <Footer/>
    </>
  );
}

const styles = StyleSheet.create({
  column: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    flexDirection:"row",
    margin: '.5em'
  },
  error: {
    flex: 1,
    backgroundColor: '#000',
    padding: '1em'
  },
  header: {
    fontSize: '1.75em',
    fontWeight: 'bold',
    color: '#fff',
    marginRight: '.5em'
  }
});
