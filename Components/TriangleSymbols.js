import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, NavigationContainer } from 'react-native';


export default function TriangleSymbol({up}) {

  let upT = "▲";
  let downT = "▼";

  return ( up === true ? <Text style = {styles.triangle}>{upT}</Text> : <Text style = {styles.triangle}>{downT}</Text> );


}

const styles = StyleSheet.create({
  triangle: {
    fontSize: '1.75em',
    fontWeight: 'bold',
    flex: '1',
    color: '#fff',
    marginRight: '.5em'
  }
});