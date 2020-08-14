import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Hello!</Text>
        <Image 
          style={{width:50,height:50}}
          source={{uri:'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'}}
        />
        <Image 
          style={styles.image}
          source={{uri:'https://www.syfy.com/sites/syfy/files/styles/1200x680/public/Screen_Shot_2017_11_29_at_8.29.28_AM.0.png'}}
        />
        <Text>Lisa</Text>
        <Image 
          style={styles.image}
          source={ require('./assets/catlisa.jpg')} 
        />
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
  },
  image:{
    height:200,
    width:400,
  }
})