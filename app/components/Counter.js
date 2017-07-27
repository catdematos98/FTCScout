import React, { Component, PropTypes } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  counter: {
    // padding: 30,
    // alignSelf: 'center',
    // fontSize: 26,
    // fontWeight: 'bold',
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  textCounter: {
    fontSize: 20,
    paddingLeft: 5,
    paddingRight: 5,
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
  elementText: {
    fontSize: 20,
    paddingLeft: 5,
    paddingRight: 5,
  },
});

export default class Counter extends Component {
  render() {
    return (
      <View style={styles.counter}>
        <Text style={styles.elementText}> {this.props.element} </Text>
        <TouchableOpacity
          style={styles.subbutton}
          onPress={this.props.decrement}
        >
          <Text style={styles.text}> - </Text>
        </TouchableOpacity>
        <Text
          style={styles.textCounter}
          onPress={this.props.reset}
        >
          {this.props.count}
        </Text>
        <TouchableOpacity
          style={styles.addbutton}
          onPress={this.props.increment}
        >
          <Text style={styles.text}> + </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Counter.propTypes = {
  // Redux
  increment: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  // React
  element: PropTypes.string.isRequired,
};

