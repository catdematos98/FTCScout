import React, { Component } from 'react';
import { 
  AppRegistry, 
  View, 
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Counter from './Counter.js';
import {NavigationActions} from 'react-navigation';
import Rating from './Rating.js';

class Team extends Component {

  clickHandler() {
    alert('clicked')
  }

  _next(){
    this.props.navigation.navigate('TeamScreen', {
      /*Passing Data*/ 
      name: this.props.name,
      num: this.props.num
    });
 }

  render() {
    return (
      <TouchableOpacity style={styles.threadContainer} onPress = {()=>this._next()}> 
        <Text style = {styles.threadTeam}> {this.props.num} </Text>
        <Text> {this.props.name}</Text>
        <Text> {this.props.Parking}</Text>
      </TouchableOpacity>
    );
  }
}

Team.navigationOptions = {
    title: 'Team',
}

const styles = StyleSheet.create({
  threadContainer: {
    padding: 2,
    borderWidth: .5,
  },

  threadTeam: {
    fontSize: 35,
  },
});

export default Team;