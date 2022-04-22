import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { TouchableHighlight, StyleSheet, Text, View, Button, TextInput, NavigationContainer, ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Header';
import Footer from './Footer';
import TriangleSymbol from './TriangleSymbols';
import ErrorEntry from './ErrorEntry';
import url from '../api.js';

export default function Errors({navigation}) {
  const [errorDetails, setErrorDetails] = useState([]);

  const getErrorReport = () => {
    fetch(url.url + ':3000/errors', {
      mode: 'cors'
    })
    .then(res => res.json())
    .then(data => setErrorDetails(data))
    .catch(err => console.log(err));
  }

  useEffect(() => {
    navigation.setOptions({headerShown: false});
    getErrorReport();

  }, [])

  let frequencySort = (sortParam, dateSortedArr) =>{
    let freq = {};
    for (let i = 0; i < dateSortedArr.length; i++) {
      let key = dateSortedArr[i][sortParam];
      if (!freq[key]) {
        freq[key] = [dateSortedArr[i]];
      } else {
        freq[key].push(dateSortedArr[i]);
      }
    }

    let sortedbyFreq = [];

    let longest;
    while(Object.keys(freq).length > 0) {
      for(let key in freq){
        if(longest === undefined) longest = key
        else if(freq[key].length > freq[longest].length) longest = key
        else if(freq[key].length === freq[longest].length) {
          break;
        }
      }
      if(sortedbyFreq.length === 0) sortedbyFreq = freq[longest];
      else sortedbyFreq = sortedbyFreq.concat(freq[longest]);
      delete freq[longest];
      longest = undefined;
    }

    return sortedbyFreq;
  }

  const handleSort = (sortBy , direction) => {

    let sortedByDate = errorDetails.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    let sortCopy = [...sortedByDate];
    if(sortBy === 'date'){
      if(direction === 'asc') setErrorDetails(sortCopy);
      else setErrorDetails(sortCopy.reverse());

    } else if (sortBy === 'type'){
      let sortedByType = frequencySort(sortBy, sortedByDate);
      if(direction === 'asc') setErrorDetails(sortedByType);
      else setErrorDetails(sortedByType.reverse());
    } else if (sortBy === 'robotId'){
      let sortedById = frequencySort(sortBy, sortedByDate);
      if(direction === 'asc') setErrorDetails(sortedById);
      else setErrorDetails(sortedById.reverse());
    } else if (sortBy === 'task'){
      let sortedByTask = frequencySort(sortBy, sortedByDate);
      if(direction === 'asc') setErrorDetails(sortedByTask);
      else setErrorDetails(sortedByTask.reverse());
    }
  }

  return (
    <>
      <Header navigation = {navigation} title = {'Error Reports'}/>
      <View style={styles.error}>
        <View style = {{flexDirection:"row"}}>
          <View style = {styles.column}>
            <Text style = {styles.header}>Robot ID</Text>
            <TouchableHighlight onPress = {()=> handleSort('robotId', 'asc')} >
              <TriangleSymbol up = {true}/>
            </TouchableHighlight>
            <TouchableHighlight onPress = {()=> handleSort('robotId', 'desc')}>
              <TriangleSymbol up = {false}/>
            </TouchableHighlight>
          </View>
          <View style = {styles.column}>
            <Text style = {styles.header}>Error Type</Text>
            <TouchableHighlight onPress = {()=> handleSort('type', 'asc')}>
              <TriangleSymbol up = {true}/>
            </TouchableHighlight>
            <TouchableHighlight onPress = {()=> handleSort('type', 'desc')}>
              <TriangleSymbol up = {false}/>
            </TouchableHighlight>
          </View>
          <View style = {styles.column}>
            <Text style = {styles.header}>Date/Time</Text>
            <TouchableHighlight onPress = {()=> handleSort('date', 'asc')}>
              <TriangleSymbol up = {true}/>
            </TouchableHighlight>
            <TouchableHighlight onPress = {()=> handleSort('date', 'desc')}>
              <TriangleSymbol up = {false}/>
            </TouchableHighlight>
          </View>
          <View style = {styles.column}>
            <Text style = {styles.header}>Task</Text>
            <TouchableHighlight onPress = {()=> handleSort('task', 'asc')}>
              <TriangleSymbol up = {true}/>
            </TouchableHighlight>
            <TouchableHighlight onPress = {()=> handleSort('task', 'desc')}>
              <TriangleSymbol up = {false}/>
            </TouchableHighlight>
          </View>
        </View>
        <ScrollView>
          {errorDetails.length > 0 ? errorDetails.map((error, index) => {

            return <ErrorEntry key = {index} id = {error.robotId} type = {error.type} date = {error.date} task = {error.task} />

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
