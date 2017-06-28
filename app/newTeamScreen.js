
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
        //Same dispatch function from before
        this.props.navigation.dispatch(

            //in this case were running the action "reset"
            NavigationActions.reset({
                //this is the index of the page we want to go to 
                //it can be anything but in this case we want to go to the start
                index: 0,

                //this is what action we want to do 
                //we are navigating to the first page but we have to do this inside the reset function or else it would add the page to the navigator stack instead of going back to the first one
                //idk what else you can do in here but ik this works
                actions: [
                    //routeName has to be the ReferenceName of the page you are going to 
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