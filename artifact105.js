import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default function App(){
  return(
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>Box</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  box:{
    width:200,
    height:200,
    backgroundColor:'skyblue',
    borderWidth:2,
    borderColor:'steelblue',
    borderRadius:20,
  }
})