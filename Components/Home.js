import { StatusBar } from 'expo-status-bar';
import React, {useState , useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput, NavigationContainer } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home({navigation}) {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [showSignUpFields, setShowSignUpFields] = useState(0);
  const [userOrg, setUserOrg] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [])

  return (
    <View style={styles.container}>
      <Text>REEKON</Text>
      <TextInput placeholder = "Username" onChangeText = {username => setUserName(username)}/>
      <TextInput secureTextEntry = {true} placeholder = "Password" multiline = {false} onChangeText = {password => setUserPassword(password)}/>
      {showSignUpFields === 0 ? <Button title = "Login" onPress = {()=> navigation.navigate('MainMenu')}/> : null}
      {showSignUpFields === 1 ? <>
      <TextInput placeholder = "Organization" onChangeText = {org => setUserOrg(org)}/>
      <TextInput placeholder = "Email" onChangeText = {email => setUserEmail(email)}/>
      </> : null}
      <Button title = "SignUP" onPress = {()=> {
        showSignUpFields === 1 ? navigation.navigate('MainMenu') : setShowSignUpFields(showSignUpFields + 1);
      }}/>
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
