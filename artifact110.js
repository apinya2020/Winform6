import React,{Component} from 'react'
import {View,StyleSheet} from 'react-native'

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.box,styles.box1} />
        <View style={styles.box,styles.box2} />
        <View style={styles.box,styles.box3} />
      </View>
    )
  }
}

const styles=StyleSheet.create({
    container:{
      flex:1,
    },
    box:{
      flex:1,
      borderWidth:2,
      borderRadius:20,
    },
    box1:{
      backgroundColor:'skyblue',
      borderColor:'stelblue',
    },
    box2:{
      backgroundColor:'pink',
      borderColor:'red',
    },
    box3:{
      backgroundColor:'lightgreen',
      borderColor:'darkgreen',
    }
})