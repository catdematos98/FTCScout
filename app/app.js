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
    this.setState({ results });
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
                key={Math.floor((Math.random()*1000) +1)}/>
            })}

            {TeamList.list.length === 0 &&
              <View style={{padding: 50}}>
                <Text style={{fontSize: 50, textAlign:'center'}}> Add teams!</Text>
                <Text style={{fontSize: 20, textAlign:'center'}} > Whenever you add a team, it will show up here, on your home screen. </Text>
              </View>
            }

          </ScrollView>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.addTeamButton}
              onPress={() => {
                this.setState({searchVisible: !this.state.searchVisible})
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

//This is the title that appears on the top
//it has to be the same name as your class
//{CLASSNAME}.navigationOptions = {}
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
    left: Dimensions.get("window").width/2 - 90,
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