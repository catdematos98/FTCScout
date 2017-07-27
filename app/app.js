import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity,
  Alert,
  AsyncStorage,
} from 'react-native';
import SearchBar from 'react-native-searchbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Provider } from 'react-redux';

import store from './store/store';
import CounterContainer from './containers/CounterContainer';
import Team from './components/Team';

const TeamList = require('./components/index');

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
    left: (Dimensions.get('window').width / 2) - 120,
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
    left: (Dimensions.get('window').width / 2) - 120,
    bottom: 91,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  scroll: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchVisible: false,
      teamList: TeamList.list, // not used but kept for clarity
    };
  }

  getInitialState() {
    return {};
  }

  componentDidMount() {
    AsyncStorage.getItem('Teams').then((value) => {
      const restoredArray = JSON.parse(value);
      if (typeof restoredArray === 'object') {
        this.setState({ teamList: restoredArray });
// to use TeamList, use this line, refresh, add a team, comment it back out, save and refresh
// this.setState({ teamList: restoredArray });
      }
    }).done();
  }

  saveTeams() {
    const stringifiedTeams = JSON.stringify(this.state.teamList);
    AsyncStorage.setItem('Teams', stringifiedTeams);
  }

  delete(number) {
    const index = this.state.teamList.findIndex(team => team.num === number);
    const newTeamsList = this.state.teamList.slice(); // copy array
    newTeamsList.splice(index, 1); // remove element
    this.setState({ teamList: newTeamsList }); // update state
    this.saveTeams();
  }

  deleteTeam(number) {
    Alert.alert(
    'Delete Team',
    'Are you sure?',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'Delete', onPress: () => this.delete(number) },
      ],
      { cancelable: false },
    );
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {this.state.searchVisible &&
            // CHECK SEARCHBAR
            <SearchBar />
          }

          <ScrollView style={styles.scroll}>
            <CounterContainer element="Particles" />
            {this.state.teamList.map((team) => {
              return (
                <Team
                  onLongPress={() => this.deleteTeam(team.num)}
                  navigation={this.props.navigation}
                  name={team.name}
                  num={team.num}
                  Parking={team.Parking}
                  key={Math.floor((Math.random() * 1000) + 1)}
                />
              );
            })}

            {this.state.teamList.length === 0 &&
              <View style={{ padding: 50 }}>
                <Text style={{ fontSize: 50, textAlign: 'center' }}> Add teams!</Text>
                <Text style={{ fontSize: 20, textAlign: 'center' }} > Whenever you add a team, it will show up here, on your home screen. </Text>
              </View>
            }

          </ScrollView>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.formButton}
              onPress={() => this.props.navigation.navigate('QuestionsForm', {
              //  handleTeamAdd: (team) => { this.state.teamList.push(team); },
              })}
            >
              <Text style={styles.buttonText}> <Icon name="wpforms" color="white" size={30} /> </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addTeamButton}
              onPress={() => {
                if (this.state.teamList.length === 0) {
                  Alert.alert('Nothing to Search', '\t You do not have anything to search through yet! \n\t\t\t Add teams using the + button!');
                } else {
                  this.setState({ searchVisible: !this.state.searchVisible });
                }
              }}
            >
              <Text style={styles.buttonText}> <Icon name="search" color="white" size={30} /> </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addTeamButton}
              onPress={() => this.props.navigation.navigate('newTeamScreen', {
                handleTeamAdd: (team) => {
                  this.state.teamList.push(team);
                  this.saveTeams();
                },
              })}
            >
              <Text style={styles.buttonText}> + </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Provider>
    );
  }

}

App.navigationOptions = {
  title: 'Teams',
};

App.propTypes = {
  navigation: PropTypes.object.isRequired,
};
