import React, { Component } from 'react';
import { 
  AppRegistry, 
  View, 
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';

class Counter extends Component {
  constructor(props) {
     super(props);
     this.state = { count: 0 };
  }

  onclick(type) {
      this.setState({
         count: type == 'add' ? this.state.count + 1: this.state.count - 1
      });
  }

  render() {
    return(
      <View style = {styles.counter}>
        <Text style={styles.elementText}> {this.props.element} </Text>
          <TouchableOpacity style={styles.subbutton} 
            onPress={this.onclick.bind(this, 'sub')}>
            <Text style={styles.text}> - </Text>
          </TouchableOpacity>

          <Text style={styles.text}> {this.state.count} </Text>

          <TouchableOpacity style={styles.addbutton} 
            onPress={this.onclick.bind(this, 'add')}>
            <Text> + </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counter: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
  text:{
    fontSize: 20,
  },
  addbutton: {
    backgroundColor: 'lightgreen',
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subbutton: {
    backgroundColor: 'tomato',
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  elementText:{
    fontSize: 20,
  },
});
export default Counter;