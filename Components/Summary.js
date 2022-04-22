import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, NavigationContainer, ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Header';
import Footer from './Footer';
import SummaryEntry from './SummaryEntry';

export default function Summary({navigation}) {

  const [compiledData, setCompiledData] = useState([]);

  const getSummaryInfo = () => {
    let errorData;
    let summaryData;
    let combinedData = [];
    fetch('http://localhost:3000/status', {
      mode: 'cors'
    })
    .then(res => res.json())
    .then(data =>  {
      summaryData = data;
    })
    .then(() => {
      fetch('http://localhost:3000/errors', {
      mode: 'cors'
      })
      .then(res => res.json())
      .then(data => {
        errorData = data
      })
      .then(() => {
        console.log(errorData);
        console.log(summaryData)
        for(let i = 0; i < summaryData.length; i++) {
        let entry = {
          robotId: summaryData[i].robotId,
          task: summaryData[i].status ? summaryData[i].status : 'N/A',
          completion: summaryData[i].completion ? summaryData[i].completion : 'N/A',
          errors: 'N/A'

        }
          for(let j = 0; j < errorData.length; j++) {
            if(summaryData[i].robotId === errorData[j].robotId) {
              entry.errors = entry.errors === 'N/A' ? 1 : entry.errors + 1;
            }
          }
          combinedData.push(entry);
        }
        console.log(combinedData)
        setCompiledData(combinedData);
      })
      .catch(err => console.log(err));

    })
    .catch(err => console.log(err));
  }


  useEffect(() => {
    getSummaryInfo();

  }, [])



  return (
    <>
      <Header navigation = {navigation} title = {'Summary'}/>

      <View style={styles.summary}>
        <View style = {{flexDirection:"row"}}>
          <View style = {styles.column}>
            <Text style = {styles.header}>Robot ID</Text>
          </View>
          <View style = {styles.column}>
            <Text style = {styles.header}>Task</Text>
          </View>
          <View style = {styles.column}>
            <Text style = {styles.header}>Completion</Text>
          </View>
          <View style = {styles.column}>
            <Text style = {styles.header}>Errors Last Week</Text>
          </View>
        </View>
        <ScrollView>
        {compiledData.length > 0 ? compiledData.map((data, index) => {

          return <SummaryEntry key = {index} id = {data.robotId} task = {data.task} completion = {data.completion} errors = {data.errors} />

        }) : <Text>Summary not available</Text>}
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
  summary: {
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
