import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
  TouchableHighlight,
 } from 'react-native';
import { NavigationActions } from 'react-navigation';
import NewGameElement from './NewGameElement';

const Questions = require('./questions.js');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'lightgrey',
    width: Dimensions.get('window').width / 2,
  },
  addQuestionButton: {
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: Dimensions.get('window').width / 4,
    marginTop: 10,
  },
  submit: {
    backgroundColor: 'silver',
    padding: 10,
    width: Dimensions.get('window').width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    left: Dimensions.get('window').width / 4,
  },
});


class QuestionsForm extends Component {
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
    const questions = Questions.auto;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}> Autonomous </Text>
            <TouchableOpacity
              style={styles.addQuestionButton}
              onPress={() => {
                return (<NewGameElement />);
              }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 30 }}> + </Text>
            </TouchableOpacity>
          </View>
          {questions.map((q) => {
            return (
              <NewGameElement
                navigation={this.props.navigation}
                dataType={q.type}
                elementname={q.name}
                key={Math.floor((Math.random() * 1000) + 1)}
              />
            );
          },
          )}
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}> Tele-Op </Text>
            <TouchableOpacity
              style={styles.addQuestionButton}
              onPress={() => {
                return (<NewGameElement />);
              }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 30 }}> + </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}> End Game </Text>
            <TouchableHighlight
              style={styles.addQuestionButton}
              underlayColor={'silver'}
              onPress={this.handleClick}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 30 }}> + </Text>
            </TouchableHighlight>
          </View>
          {/* <TouchableHighlight
              style = {styles.submit}
              underlayColor={"grey"}
              onPress = {()=>{
                  this.handleSubmit();
                  this._top();
              }}>
              <Text>Submit</Text>
          </TouchableHighlight> */}
        </ScrollView>
      </View>
    );
  }
 }

QuestionsForm.navigationOptions = {
  title: 'Questions Form',
};

QuestionsForm.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default QuestionsForm;
