import { StatusBar } from 'expo-status-bar';
import React, {useState , useEffect} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, NavigationContainer } from 'react-native';
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
  console.log('Hello Reekon Team!')

  return (
    <View style={styles.container}>
      <Text style = {styles.logo}>REEKON</Text>
      <TextInput style = {styles.input} placeholder = "Username" onChangeText = {username => setUserName(username)}/>
      <TextInput style = {styles.input} secureTextEntry = {true} placeholder = "Password" multiline = {false} onChangeText = {password => setUserPassword(password)}/>
      {showSignUpFields === 0 ?

        <TouchableHighlight title = "Login" onPress = {()=> navigation.navigate('MainMenu')}>
          <Text style = {styles.button}>Login</Text>
        </TouchableHighlight>
      : null}
      {showSignUpFields === 1 ? <>
      <TextInput style = {styles.input} placeholder = "Organization" onChangeText = {org => setUserOrg(org)}/>
      <TextInput  style = {styles.input}placeholder = "Email" onChangeText = {email => setUserEmail(email)}/>
      </> : null}

      <TouchableHighlight onPress = {()=> {
        showSignUpFields === 1 ? navigation.navigate('MainMenu') : setShowSignUpFields(showSignUpFields + 1);
      }}>
        <Text style = {styles.button}>Sign Up</Text>
      </TouchableHighlight>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: '7em',
    color: '#fff',
    marginBottom: '1em',
    fontWeight: 'bold',
  },
  input: {
    height: '2em',
    fontSize: '1.5em',
    backgroundColor: '#fff',
    marginBottom: '1em',
  },
  button: {
    backgroundColor: '#FFFF00',
    margin: '1em',
    color: '#000',
    fontSize: '1.5em',
    width: '13em',
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
