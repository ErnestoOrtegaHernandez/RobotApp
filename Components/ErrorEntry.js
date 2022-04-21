import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


export default function ErrorEntry({id, type, date, task}) {


  return (
    <>
      <View style = {{flexDirection:"row", margin: '.5em', backgroundColor: '#808080'}}>
        <View style = {styles.column}>
          <Text style= {styles.text}>{id}</Text>
        </View>
        <View style = {styles.column}>
          <Text style= {styles.text}>{type.toUpperCase()}</Text>
        </View>
        <View style = {styles.column}>
          <Text style= {styles.text}>{date}</Text>
        </View>
        <View style = {styles.column}>
          <Text style= {styles.text}>{task.toUpperCase()}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  column:{
    flex: 1,
    height: '2.5em',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: '1em',
    color: '#fff'
  }
});
