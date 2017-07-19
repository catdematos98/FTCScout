import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {StackNavigator} from 'react-navigation';
//https://reactnavigation.org/

import App from './app/app.js';
import newTeamScreen from './app/newTeamScreen.js';
import TeamScreen from './app/TeamScreen.js';
import Team from './app/Team.js';
import Screen4 from './app/Screen4.js';
import QuestionsForm from './app/QuestionsForm.js';

//This is where you declare all the pages you want to be able to navigate to
//This does not make your navigation stack it just makes them availbe to referance later when you want to navigate to them

//the first word is what im gunna call your Reference Name,
//This is what you will reference when navigating to each page I.E.:
//{ReferenceName}: {screen: {NameOfImportedComponent}}
const MyApp = StackNavigator({
  
  //the first screen listed is the inital page shown
  Home: {screen: App},
  TeamScreen: {screen: TeamScreen},
  Team: {screen: Team},
  newTeamScreen: {screen: newTeamScreen},
  Screen4: {screen: Screen4},
  QuestionsForm: {screen: QuestionsForm},
});


class FTCScout extends Component {

  render() {
    return (

      //your inital page
      <MyApp screenProps = {teamList}/>
    );
  }
}


//the last word has to be the same as your const {Name} = StackNavigator({});
AppRegistry.registerComponent('FTCScout', () => MyApp);