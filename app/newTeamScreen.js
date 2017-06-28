
import React, { Component } from 'react';
import { 
  AppRegistry, 
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  TextInput,
  TouchableHighlight,
 } from 'react-native';
import {NavigationActions} from 'react-navigation';
import Autonomous from './Autonomous.js';

 class newTeamScreen extends Component{
   constructor() {
      super()
      this.state = {
         name: '',
         num: '',
      }
   }

    _top(){
        this.props.navigation.dispatch(
            NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName: 'Home'})
                ]
             })
        );
    }

    handleTeamAdd(){
        const {params} = this.props.navigation.state;
        params.handleTeamAdd({name: this.state.name, num: this.state.num});
    }

    render(){
        const {params} = this.props.navigation.state;
        return(
            <View> 
                <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 20, backgroundColor:'lightgrey'}}> 
                    Team Info 
                </Text>

                <View style={{flexDirection: 'row'}}>
                    <TextInput
                        style={{width: Dimensions.get("window").width * .5}}
                        placeholder = 'Name'
                        autoCapitalize = 'none'
                        autoCorrect = {false}
                        onChangeText = {(name)=>this.setState({name})}
                    />
                    <TextInput
                        style={{width: Dimensions.get("window").width * .5}}
                        placeholder = 'Number'
                        autoCapitalize = 'none'
                        autoCorrect = {false}
                        onChangeText = {(num)=>this.setState({num})}
                    />
                </View>

                <Autonomous/>

                <TouchableHighlight
                    style = {styles.submit}
                    underlayColor={"grey"}
                    onPress = {()=>{
                        this.handleTeamAdd();
                        this._top();
                    }}>
                    <Text>Submit</Text>
                </TouchableHighlight> 

            </View>
        );
     }
 }

//This is the title that appears on the top
//it has to be the same name as your class
//{CLASSNAME}.navigationOptions = {}
newTeamScreen.navigationOptions = {
    title: 'New Team',
}

const styles = StyleSheet.create({

   submit: {
      backgroundColor: 'silver',
      padding: 10,
      width: Dimensions.get("window").width * .5,
      justifyContent: 'center',
      alignItems: 'center',
      left: Dimensions.get("window").width/4,
   },

});

 export default newTeamScreen;