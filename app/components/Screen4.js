import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
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
    backgroundColor: 'lightgreen',
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


class Screen4 extends Component {

  back() {
 // this.props.dispatch in the main function that literally activates/runs the action you give it
 // In this case we are going back one page
    this.props.navigation.dispatch(NavigationActions.back());
  }

// This navigates back to the initial page
  top() {
  // Same dispatch function from before
    this.props.navigation.dispatch(
      // in this case were running the action "reset"
      NavigationActions.reset({
        // this is the index of the page we want to go to
        // it can be anything but in this case we want to go to the start
        index: 0,
        // this is what action we want to do
        // we are navigating to the first page but we have to do this
        // inside the reset function or else it would add the page to the
        // navigator stack instead of going back to the first one
        // idk what else you can do in here but ik this works
        actions: [
            // routeName has to be the ReferenceName of the page you are going to
          NavigationActions.navigate({ routeName: 'Home' }),
        ],
      }),
      );
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text>{params.teamName}</Text>
        <Text style={styles.text}>This is Screen 4</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.back()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.top()}>
          <Text style={styles.buttonText}>Go Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
 }

// This is the title that appears on the top
// it has to be the same name as your class
// {CLASSNAME}.navigationOptions = {}
Screen4.navigationOptions = {
  title: 'Screen 4',
};

Screen4.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Screen4;
