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
            <Text style={{
                marginTop: 10, 
                fontWeight: 'bold', 
                fontSize: 25, 
                backgroundColor:'lightgrey'}}
            > Autonomous </Text> 
                <Rating element="Parking"/>
        </View>
    );
  }
}

export default Autonomous;