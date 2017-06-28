import React, { Component } from 'react';
import { 
  AppRegistry, 
  View, 
  TextInput,
  StyleSheet,
  Picker,
  Dimensions,
  Text,
} from 'react-native';
import Counter from './Counter.js';
import Rating from './Rating.js';

class Autonomous extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };  
  }

  render(){
    return(
        <View>
            <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 20, backgroundColor: 'lightgrey'}}> Autonomous </Text> 
                <Rating element="Parking"/>
                <Counter element="Particles"/>
            <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 20, backgroundColor: 'lightgrey'}}> Tele-Op </Text>
                <Rating/>
                <Counter/>
            <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 20, backgroundColor: 'lightgrey'}}> End Game </Text>
                <Rating element="dksjfhdskjfhksd"/>
                <Counter/>
        </View>
    );
  }
}

export default Autonomous;