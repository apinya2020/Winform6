import React from 'react'
import {Image,StyleSheet,Text,View} from 'react-native'

export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Girl Group k-pop</Text>
        <View style={styles.top} />
        <View style={styles.middle} />
        <View style={styles.bottom} />
        <Image
          style={styles.image}
          source={{uri:'https://f.ptcdn.info/345/062/000/pmhg4zhgbm7Y05I8TTY-o.jpg'}}
        />
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-between',
    backgroundColor:'#ffffff',
    padding:10,
    margin:10,
  },
  top:{
    flex:0.3,
    backgroundColor:'grey',
    borderWidth:5,
    borderTopLeftRadius:20
  },
  middle:{
    flex:0.3,
    backgroundColor:'beige',
    borderWidth:5,
  },
  bottom:{
    flex:0.3,
    backgroundColor:'pink',
    borderWidth:5,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },
  image:{
    width:420,
    height:250,
  },
  text:{
    color:'#8A2BE2',
    backgroundColor:'steelblue',
  },
})