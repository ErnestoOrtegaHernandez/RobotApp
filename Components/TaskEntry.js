import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button} from 'react-native';


export default function TaskEntry({task, update, canPress, deselect}) {

  let obgColor = "#b3b3b3";
  let pbgColor = "FFFF00";
  const [bgColor, setColor] = useState(obgColor);

  return (
    <>
      {canPress ? <TouchableHighlight onPress = {()=>{
        if(bgColor === obgColor){
          setColor(pbgColor);
          update();
        } else {
          setColor(obgColor);
          deselect();
        }
      }}>
        <View style = {[styles.column, {backgroundColor: bgColor}]}>
          <Text style = {styles.text}>{task}</Text>
        </View>
      </TouchableHighlight>:
      <View style = {[styles.column, {backgroundColor: bgColor}]}>
          <Text style = {styles.text}>{task}</Text>
      </View>}

    </>
  );
}

const styles = StyleSheet.create({
  column:{
    height: '3em',
    width: '10em',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '.25em'
  },
  text: {
    fontSize: '1.5em',
    color: '#000',
    fontWeight: 'bold'
  }
});
