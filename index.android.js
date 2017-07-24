import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
// https://reactnavigation.org/

import App from './app/app';
import newTeamScreen from './app/components/newTeamScreen';
import TeamScreen from './app/components/TeamScreen';
import Team from './app/components/Team';
import Screen4 from './app/components/Screen4';
import QuestionsForm from './app/components/QuestionsForm';

// This is where you declare all the pages you want to be able to navigate to
// This does not make your navigation stack it just makes them availbe
// to referance later when you want to navigate to them

// the first word is what im gunna call your Reference Name,
//  This is what you will reference when navigating to each page I.E.:
// {ReferenceName}: {screen: {NameOfImportedComponent}}
const MyApp = StackNavigator({
  // the first screen listed is the inital page shown
  Home: { screen: App },
  Team: { screen: Team },
  newTeamScreen: { screen: newTeamScreen },
  Screen4: { screen: Screen4 },
  QuestionsForm: { screen: QuestionsForm },
  TeamScreen: { screen: TeamScreen },
});

// class FTCScout extends Component {
//   render() {
//     return (
//       // your inital page
//       <MyApp screenProps={teamList} />
//     );
//   }
// }


// the last word has to be the same as your const {Name} = StackNavigator({});
AppRegistry.registerComponent('FTCScout', () => MyApp);
