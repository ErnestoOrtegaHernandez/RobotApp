import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {

  return (
    <View style={styles.footer}>
      <Text style = {styles.footerText}>Reekon Robot Assistants Control Interface</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#000',
    width: '100%',
    alignItems: 'center'
  },
  footerText: {
    color: '#fff',
    margin: '.25em',
    fontSize: '.5em'
  }

});