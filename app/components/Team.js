import React, { Component, PropTypes } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
// import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
  threadContainer: {
    padding: 2,
    borderWidth: 0.5,
  },
  threadTeam: {
    fontSize: 35,
  },
});

class Team extends Component {

  next() {
    this.props.navigation.navigate('TeamScreen', {
      /* Passing Data */
      name: this.props.name,
      num: this.props.num,
    });
  }

  render() {
    return (
      <TouchableOpacity style={styles.threadContainer} onPress={() => this.next()}>
        <Text style={styles.threadTeam}> {this.props.num} </Text>
        <Text> {this.props.name}</Text>
        <Text> {this.props.Parking}</Text>
      </TouchableOpacity>
    );
  }
}

Team.navigationOptions = {
  title: 'Team',
};

Team.propTypes = {
  name: PropTypes.string.isRequired,
  num: PropTypes.string.isRequired,
  Parking: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default Team;
