import React from 'react';

import {Button, FlatList, StyleSheet, Text, TextInput, View,} from 'react-native';

const App = () => {
  return (
        <View style={styles.container}>

          <TextInput style={styles.textInput}/>

          <View style={styles.buttonWrapper}>
            <Button title='ADD'/>
          </View>

          <View style={styles.flatListWrapper}>

            <FlatList>

            </FlatList>
            
          </View>
         
        </View>
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
  flatListWrapper:{
    backgroundColor: '#03A1FC',
    opacity: 0.5,
  }
});

export default App;
