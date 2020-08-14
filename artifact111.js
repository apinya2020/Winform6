import React,{Component} from 'react'
import {View,StyleSheet,Image} from 'react-native'

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={[styles.box,styles.box1]}/>
        <Image 
          style={[styles.box,styles.box3]}
          source={{uri:'https://www.syfy.com/sites/syfy/files/styles/1200x680/public/Screen_Shot_2017_11_29_at_8.29.28_AM.0.png'}}
        />
        <View style={[styles.box,styles.box2]} />
        <View style={[styles.box,styles.box3]} />
      </View>
    )
  }
}

const styles=StyleSheet.create({
    container:{
      flex:1,
    },
    box:{
      margin:15,
      borderWidth:2,
      borderRadius:20,
    },
    box1:{
      flex:1,
      backgroundColor:'skyblue',
      borderColor:'stelblue',
    },
    box2:{
      flex:2,
      backgroundColor:'pink',
      borderColor:'red',
    },
    box3:{
      flex:3,
      backgroundColor:'lightgreen',
      borderColor:'darkgreen',
    },
    image:{
      height:200,
      width:400,
    }
})