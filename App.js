import React from 'react';

import {Button, FlatList, StyleSheet, Text, TextInput, View, Alert} from 'react-native';

const App = () => {

  return (
        <View style={styles.container}>

          <TextInput style={styles.textInput}/>

          <View style={styles.buttonWrapper}>
            <Button title='ADD'/>
          </View>

          {/* Temp button to call alert function for now until the longpress of a flatlist functionality is done: */}
          <View style={styles.tempButtonWrapper}>
            <Button title='Test the Alert' onPress={CreateAlert}/>
          </View>
          {/* Temp button code ends*/}

          

          <View style={styles.flatListWrapper}>

            <FlatList>

            </FlatList>

          </View>
         
        </View>
  );
};

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
    justifyContent:'center',
    alignItems:'center',
  },
  textInput:{
    position:'absolute',
    top:30,
    left:40,
    justifyContent:'center',
    width:230,
    height: 40,
    backgroundColor: 'lightblue',
    border: 'none',
  },
  buttonWrapper:{
    position: 'absolute',
    top: 32,
    right: 40,
    width: 80,
  },
  tempButtonWrapper:{
    position: 'absolute',
    top: 90,
    right: 20,
    width: 100,
  }
});

export default App;
