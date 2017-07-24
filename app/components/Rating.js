import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    padding: 5,
  },
  buttonText: {
  },
  elementText: {
    fontSize: 20,
  },
});

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
    };
  }

  render() {
    return (
      <View style={styles.rating}>
        <Text style={styles.elementText}> {this.props.element} </Text>
        <TouchableOpacity
          style={{
            backgroundColor: (this.state.rating === 'low') ? 'lightblue' : 'lightgrey',
            borderWidth: 5,
            borderRadius: 100,
            borderColor: (this.state.rating === 'low') ? 'lightblue' : 'lightgrey',
            margin: 3,
          }}
          onPress={() => this.setState({ rating: 'low' })}
        >
          <Text style={styles.buttonText}> LOW </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: (this.state.rating === 'med') ? 'lightblue' : 'lightgrey',
            borderWidth: 5,
            borderRadius: 100,
            borderColor: (this.state.rating === 'med') ? 'lightblue' : 'lightgrey',
            margin: 3,
          }}
          onPress={() => this.setState({ rating: 'med' })}
        >
          <Text style={styles.buttonText}> MED </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: (this.state.rating === 'high') ? 'lightblue' : 'lightgrey',
            borderWidth: 5,
            borderRadius: 100,
            borderColor: (this.state.rating === 'high') ? 'lightblue' : 'lightgrey',
            margin: 3,
          }}
          onPress={() => this.setState({ rating: 'high' })}
        >
          <Text style={styles.buttonText}> HIGH </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Rating.propTypes = {
  element: PropTypes.string.isRequired,
};

export default Rating;
