import React from 'react';
import { useState } from 'react';
import {FlatList, StyleSheet, Text, TextInput, View, Alert, TouchableOpacity} from 'react-native';

const App = () => {
  
  const [item, setItem] = useState();
  const [list, addToList] = useState([]);

  const inputHandler = (enteredText) => {
    setItem(enteredText)
  }

  const addItemToList = () =>{
    addToList(list=>[...list,item])
  }
  const renderItem = ({item}) => {
    return(
      <TouchableOpacity onPress={CreateAlert}>
        <Text style={styles.itemStyle} key={item.index}>{item}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>

      <TextInput style={styles.textInput} onChangeText={inputHandler}/>
      
      <TouchableOpacity style={styles.button} onPress={addItemToList}> 
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>

      <View style={styles.flatListWrapper}>

        <FlatList
          data={list}
          renderItem={renderItem}

        />

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
        text: "Cancel"
      },
      { text: "OK",
        onPress: () => console.log("OK pressed")
      }
    ],
    {
      cancelable:true,
    }
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
    padding:0,
    margin:0,
  },
  itemStyle:{
    color: '#000',
    fontSize: 25,
    textAlign: 'center',
    padding:5,
    margin:10,
    backgroundColor: '#41a1ee',
    borderRadius: 13,
  }
});

export default App;