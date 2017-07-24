// Screen 3
import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
 } from 'react-native';
import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '100',
    fontSize: 40,
    textAlign: 'center',
    paddingVertical: 100,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: 50,
    marginVertical: 5,
    backgroundColor: 'grey',
  },

  buttonText: {
    fontWeight: '100',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});

class TeamScreen extends Component {
  _next() {
    this.props.navigation.navigate('Screen4', { /* Passing Data */ teamName: 'Locomotors' });
  }

  _back() {
    this.props.navigation.dispatch(NavigationActions.back());
  }


  _top() {
    this.props.navigation.dispatch(
        NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home' }),
          ],
        }),
    );
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}> {params.name} </Text>
      </View>
    );
  }
 }

TeamScreen.navigationOptions = {
  title: 'Team Stats',
};

TeamScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default TeamScreen;
