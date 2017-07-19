import React, { Component } from 'react';
import { 
  AppRegistry, 
  View,
  ScrollView,
  StyleSheet,
  Button, 
  Text,
  Dimensions,
  TouchableOpacity,
 } from 'react-native';
import Team from './Team.js';
import SearchBar from 'react-native-searchbar';
import Icon from 'react-native-vector-icons/FontAwesome';

var TeamList = require('./index.js');

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchVisible: false,
      results: [],
    };
  }

  _handleResults(results) {
   // this.setState({ results });
  }

  render() {
    let teamList = TeamList.list;
    return (
        <View style={styles.container}>
    
            {this.state.searchVisible === true &&
                  <SearchBar 
                    ref={(ref) => this.searchBar = ref}
                    data={TeamList.list}
                    handleResults={this._handleResults}
                    showOnLoad
                  />
            }  

          <ScrollView style={styles.scroll}> 

            {teamList.map((team)=> {
              return <Team 
                navigation={this.props.navigation} 
                name={team.name} 
                num={team.num}
                Parking={team.Parking}
                key={Math.floor((Math.random()*1000) +1)}
                />
            })}

            {TeamList.list.length === 0 &&
              <View style={{padding: 50}}>
                <Text style={{fontSize: 50, textAlign:'center'}}> Add teams!</Text>
                <Text style={{fontSize: 20, textAlign:'center'}} > Whenever you add a team, it will show up here, on your home screen. </Text>
              </View>
            }

          </ScrollView>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.formButton}
              onPress={() => this.props.navigation.navigate('QuestionsForm', {
                handleTeamAdd: (team) => {teamList.push(team)}
                })}>
                <Text style={styles.buttonText}> <Icon name="wpforms" color="white" size={30}/> </Text>
            </TouchableOpacity>  

            <TouchableOpacity style={styles.addTeamButton}
              onPress={() => {
                if (TeamList.list.length === 0){
                  alert('\t You do not have to search through yet! \n\t\t\t Add teams using the + button!')
                }
                else{
                  this.setState({searchVisible: !this.state.searchVisible})
                }
              }}>
                <Text style={styles.buttonText}> <Icon name="search" color="white" size={30}/> </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.addTeamButton}
              onPress={() => this.props.navigation.navigate('newTeamScreen', {
                handleTeamAdd: (team) => {teamList.push(team)}
                })}>
                <Text style={styles.buttonText}> + </Text>
            </TouchableOpacity>
          </View>      
        </View>
    );
  }
}

App.navigationOptions = {
    title: 'Teams', 
};

const styles = StyleSheet.create({
  container: {
   alignItems: 'center',
   justifyContent: 'center',
  },
  addTeamButton: {
    backgroundColor: 'royalblue',
    borderRadius: 30,
    width: 60,
    height: 60,
    left: Dimensions.get("window").width/2 - 120,
    bottom: 91,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
  },
  formButton: {
    backgroundColor: 'grey',
    borderRadius: 30,
    width: 60,
    height: 60,
    left: Dimensions.get("window").width/2 - 120,
    bottom: 91,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign:'center',
    textAlignVertical: 'center',
  },
  scroll:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default App;