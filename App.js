import React from 'react';

import {StyleSheet, Text, View,} from 'react-native';

const App = () => {
  return (
        <View style={styles.container}>
          <Text>Hello React Native World! testi</Text>
        </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
});

export default App;
