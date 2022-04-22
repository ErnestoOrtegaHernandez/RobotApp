import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, NavigationContainer, Modal, Pressable, TouchableHighlight } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Header';
import Footer from './Footer';
import ManageEntry from './ManageEntry';
import Task from './TaskEntry';


export default function Manage({navigation}) {

  const [robotStatus, setRobotStatus] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [pairTask, setPairTask] = useState('');
  const [pairRobot, setPairRobot] = useState('');

  const getRobotStatus = () => {
    let robotsStatus;
    let tasksList;
    fetch('http://localhost:3000/status', {
      mode: 'cors'
    })
    .then(res => res.json())
    .then(data => robotsStatus = data)
    .then(()=>{
      fetch('http://localhost:3000/tasks', {
      mode: 'cors'
      })
      .then(res => res.json())
      .then(data => tasksList = data)
      .then(() => {
        setRobotStatus(robotsStatus);
        setTasks(tasksList);
      })
    })
    .catch(err => console.log(err));
  }

  useEffect(() => {
    navigation.setOptions({headerShown: false});
    getRobotStatus();

  }, [])

  const handleModal = () => {
    setModalVisible(!modalVisible);
  }

  const handlePost = () => {
    fetch('http://localhost:3000/status', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        task: pairTask,
        robot: pairRobot
      })
    })
    .then(data => {
      getRobotStatus();
      setPairRobot('');
      setPairTask('');
    })
    .catch(err => console.log(err));
  }

  console.log(tasks, 'tasks')
  console.log(robotStatus, 'robotStatus')
  console.log(pairRobot, 'robotid')
  console.log(pairTask, 'pair task')


  return (
    <>
      <Header navigation = {navigation} title = {'Manage Robots'}/>
      <View style={styles.manage}>

      <View style = {{flexDirection:"row", margin: '.5em', backgroundColor: '#000'}}>
        <View style = {styles.column}>
          <Text style= {styles.text}>RobotId</Text>
        </View>
        <View style = {styles.column}>
          <Text style= {styles.text}>Battery</Text>
        </View>
        <View style = {styles.column}>
          <Text style= {styles.text}>Status</Text>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeader}>Select a Task</Text>
            {tasks.map((task, index) => {

              return (<Task task = {task} key = {index} update = {()=> setPairTask(task)}
                        canPress = {pairTask.length > 0 ? false : true} deselect = {()=>setPairTask('')}/>)

              })}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                handlePost();
                setModalVisible(!modalVisible)
              }}
            >
              <Text style={styles.textStyle}>Confirm</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setPairRobot('');
                setPairTask('');
                setModalVisible(!modalVisible)
              }}
            >
              <Text style={styles.textStyle}>close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {robotStatus.map((robot, index) => {

        return (
          robot.battery >= 25 ?
          <TouchableHighlight onPress = {() => {
              handleModal();
              setPairRobot(robot.robotId);
            }}>
            <ManageEntry id = {robot.robotId} battery = {robot.battery} status = {robot.status} key = {index}/>
          </TouchableHighlight> :
          <ManageEntry id = {robot.robotId} battery = {robot.battery} status = {robot.status} key = {index}/>
        )
      })}

      </View>
      <Footer/>
    </>
  );
}

const styles = StyleSheet.create({
  manage: {
    flex: 1,
    backgroundColor: '#000',
    padding: '1em'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  column:{
    flex: 1,
    height: '3.5em',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: '1em',
    color: '#fff'
  },
  modalHeader: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  }

});
