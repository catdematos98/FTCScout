import React, { Component } from 'react';
import { 
  AppRegistry, 
  View, 
  Text,
  StyleSheet,
  Button
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
        <Button color = "tomato" title="-" onPress={this.onclick.bind(this, 'sub')}> </Button>
        <Text> {this.state.count} </Text>
        <Button color = "lightgreen" title="+" onPress={this.onclick.bind(this, 'add')}> </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counter: {
    flexDirection: 'row',
    padding: 5,
  },
});
export default Counter;