import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, NavigationContainer } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function MainMenu({navigation}) {
  return (
    <View style={styles.container}>
      <Text>View Active Robots</Text>
      <Text>Errors Reports</Text>
      <Text>Summary</Text>
      <Text>Manage Robots</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
