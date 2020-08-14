import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Hello!</Text>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    color:'#8A2BE2',
    backgroundColor:'steelblue',
    padding:10,
    fontSize:24,
  }
})