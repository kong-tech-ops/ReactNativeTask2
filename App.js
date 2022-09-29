import React, { useEffect } from 'react';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import CreateAlert from './Alert';
import { init, addItemToDatabase, fetchAllItems, deleteItemFromDatabase } from './db';
import Item from './Item';

// uncomment line 9 and restart the app to see the database items in the console window
init().catch(() => console.log('An error occurred when initializing the database.'));
const App = () => {

  const [item, setItem] = useState('');
  const [list, addToList] = useState();


  // fetches data once when the app launches
  useEffect(() => {
    fetchAllItems().then((val) => {
      let data = val.map((e) => JSON.stringify(e));
      addToList(() => [...data.map((e) => JSON.parse(e))]);
    }).catch((e) => console.log(e));
  }, []);

  console.table(list);
  const inputHandler = (enteredText) => {
    setItem(enteredText);
  }

  const addItemToList = () => {
    addItemToDatabase(item);
    if (list.length !== 0) {
      let lastItemId = list[list.length - 1].id + 1;
      addToList(list => [...list, new Item(lastItemId, item, 0)]);
      return;
    }
    addToList(list => [...list, new Item(0, item, 0)]);
  }

  const renderItems = ({ item }) => {
    let { id, title, isArchived } = item;
    if (isArchived == 0) {
      return <TouchableOpacity onLongPress={() => CreateAlert(id, list, addToList)} key={id}>
          <Text style={styles.itemStyle}>{title}</Text>
        </TouchableOpacity>
    }
  }


  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} onChangeText={inputHandler} />
      <TouchableOpacity style={styles.button} onPress={addItemToList}>
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>
      <View style={styles.flatListWrapper}>
        <FlatList
          data={list}
          renderItem={renderItems}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    position: 'absolute',
    top: 30,
    left: 22,
    justifyContent: 'center',
    width: '70%',
    height: 45,
    backgroundColor: '#a1cbed',
    borderRadius: 13,
  },
  button: {
    position: 'absolute',
    top: 32,
    right: 22,
    width: '16%',
    height: 45,
    backgroundColor: "#41a1ee",
    borderRadius: 13,
  },
  buttonText: {
    textAlign: 'center',
    top: 8,
    fontSize: 20,
    fontFamily: "sans-serif",
    fontWeight: '700',
    color: '#fff'
  },
  flatListWrapper: {
    position: 'absolute',
    top: 100,
    width: '90%',
    height: '80%',
    borderRadius: 13,
    backgroundColor: '#a1cbed',
    padding: 0,
    margin: 0,
  },
  itemStyle: {
    color: '#000',
    fontSize: 25,
    textAlign: 'center',
    padding: 5,
    margin: 10,
    backgroundColor: '#41a1ee',
    borderRadius: 13,
  }
});

export default App;