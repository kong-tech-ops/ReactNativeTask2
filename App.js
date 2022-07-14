import React from 'react';

import {Button, FlatList, StyleSheet, Text, TextInput, View, Alert, TouchableOpacity} from 'react-native';
import ListItem from './components/ListItem';

const App = () => {

  return (
    <View style={styles.container}>

      <TextInput style={styles.textInput}/>
      {/*rn add button onpress calls the alert, code the functionality of adding stuff to list and put it here instead: */}
      <TouchableOpacity style={styles.button} onPress={CreateAlert}> 
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>

      <View style={styles.flatListWrapper}>

        <FlatList>

        </FlatList>

      </View>

         
    </View>
    
  );
};


//code the functionality on the onpress events, rn they only log to console when pressed
const CreateAlert = () => {
  Alert.alert(
    "Delete?",
    "Do you want to delete this item?",
    [
      {
        text: "Archive",
        onPress: () => console.log("Archive pressed")
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed")
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );
        
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  textInput:{
    position:'absolute',
    top:30,
    left:22,
    justifyContent:'center',
    width:'70%',
    height: 45,
    backgroundColor: '#a1cbed',
    borderRadius:13,
  },
  button:{
    position: 'absolute',
    top: 32,
    right: 22,
    width: '16%',
    height: 45,
    backgroundColor:"#41a1ee",
    borderRadius:13,
  },
  buttonText:{
    textAlign:'center',
    top:8,
    fontSize: 20,
    fontFamily:"sans-serif",
    fontWeight:'700',
    color:'#fff'
  },
  flatListWrapper:{
    position:'absolute',
    top: 100,
    width: '90%',
    height: '80%',
    borderRadius:13,
    backgroundColor: '#a1cbed',
  }
});

export default App;
