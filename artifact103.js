
import React from 'react';
import {View,Text} from 'react-native';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      message:'I Love My Cat',//initial data
      text:'How are you today',
    }
  }

  render(){
    return(
      <View>
        <Text>{this.state.message}</Text>
        <Text>{this.state.text}</Text>
      </View>
    )
  }
}