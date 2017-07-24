import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TextInput,
  TouchableHighlight,
  ScrollView,
 } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Autonomous from './Autonomous';

const styles = StyleSheet.create({
  submit: {
    backgroundColor: 'lightgrey',
    padding: 10,
    width: Dimensions.get('window').width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    left: Dimensions.get('window').width / 4,
  },
  titleText: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 25,
    backgroundColor: 'lightgrey',
  },
});

class newTeamScreen extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      num: '',
      Parking: 'low',
    };
  }

  top() {
    this.props.navigation.dispatch(
        NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home' }),
          ],
        }),
    );
  }

  handleTeamAdd() {
    const { params } = this.props.navigation.state;
    params.handleTeamAdd({
      name: this.state.name,
      num: this.state.num,
    });
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Text style={styles.titleText}>
                  Team Info
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              style={{ width: Dimensions.get('window').width / 2 }}
              placeholder="Name"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={name => this.setState({ name })}
            />
            <TextInput
              style={{ width: Dimensions.get('window').width / 2 }}
              placeholder="Number"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={num => this.setState({ num })}
            />
          </View>
          <Autonomous />
          <TouchableHighlight
            style={styles.submit}
            underlayColor={'grey'}
            onPress={() => {
              this.handleTeamAdd();
              this.top();
            }}
          >
            <Text>Submit</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
 }

newTeamScreen.navigationOptions = {
  title: 'New Team',
};

newTeamScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default newTeamScreen;
