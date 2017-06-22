import React, { Component } from 'react';
import { 
  AppRegistry, 
  View,
  ScrollView,
  StyleSheet,
  Button, 
  Dimensions,
 } from 'react-native';
import Rating from './Rating.js';
import NewGameElement from './NewGameElement.js';
import Counter from './Counter.js';
import Team from './Team.js';

var TeamList = require('./index.js');

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  newTeamHandler() {
    alert("fh")
  }

  render() {
    let teamList = TeamList.list;
    return (
      <View style={styles.container}>
          <ScrollView >

            <Button
            style = {{paddingrrVertical: 10}}
            color = 'gray' 
            title = 'To Next Page!' 
            onPress={() => this.props.navigation.navigate('TeamScreen', {
                //i can pass data here too
                teamName: 'Chatham Cougars'
                })}/>

             {teamList.map((team)=> {
              return <Team 
                navigation={this.props.navigation} 
                name={team.name} 
                num={team.num}
                key={Math.floor((Math.random()*1000) +1)}/>
            })}

            <Rating/>

            <NewGameElement/>

        </ScrollView>

          <Button style={styles.addTeamButton} title={'+'} 
            onPress={() => this.props.navigation.navigate('newTeamScreen', {
              handleTeamAdd: (team) => {teamList.push(team)}
              })}
            />
        
      </View>
    );
  }
}

//This is the title that appears on the top
//it has to be the same name as your class
//{CLASSNAME}.navigationOptions = {}
App.navigationOptions = {
    title: 'Home Page',
};

const styles = StyleSheet.create({
  container: {
   paddingVertical: 22,
  },
  addTeamButton: {
    color: 'blue',
    flexDirection: 'row',
    padding: 5,
  },
});

export default App;