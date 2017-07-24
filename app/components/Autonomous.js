import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Rating from './Rating';

class Autonomous extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View>
        <Text style={{
          marginTop: 10,
          fontWeight: 'bold',
          fontSize: 25,
          backgroundColor: 'lightgrey' }}
        > Autonomous </Text>
        <Rating element="Parking" />
      </View>
    );
  }
}

export default Autonomous;
