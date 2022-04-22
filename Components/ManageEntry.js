import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


export default function SummaryEntry({id, status, battery}) {

  let statusColor = '';
  if(status === null){
    statusColor = battery >= 25 ? 'green' :'red';

  } else {
    statusColor = 'orange';
  }

  return (
    <>
      <View style = {{flexDirection:"row", margin: '.5em', backgroundColor: '#808080'}}>
        <View style = {styles.column}>
          <Text style= {styles.text}>{id}</Text>
        </View>
        <View style = {styles.column}>
          <Text style= {styles.text}>{battery}</Text>
        </View>
        <View style = {[styles.column, {backgroundColor: statusColor}]}></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  column:{
    flex: 1,
    height: '3.5em',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: '1em',
    color: '#fff'
  }
});
