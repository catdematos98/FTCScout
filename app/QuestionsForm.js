import React, { Component } from 'react';
import { 
  AppRegistry, 
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
  TouchableHighlight,
 } from 'react-native';
 import {NavigationActions} from 'react-navigation';
 import NewGameElement from './NewGameElement.js';

 class QuestionsForm extends Component{

    _back(){
        this.props.navigation.dispatch(NavigationActions.back());
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

    handleSubmit(){

    }

    handleClick(){
        return (
            <NewGameElement/>
        );
    }

    static questions = [];

    render(){
        return(
            <View style = {styles.container}>
                <ScrollView>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.text}> Autonomous </Text>
                            <TouchableOpacity style={styles.addQuestionButton} 
                                onPress={ () => {
                                    return( <NewGameElement/> );
                                    }}>
                                <Text style ={{fontWeight: 'bold', fontSize: 30}}> + </Text>
                            </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.text}> Tele-Op </Text>
                            <TouchableOpacity style={styles.addQuestionButton} 
                                onPress={ () => {
                                    return( <NewGameElement/> );
                                    }}>
                                <Text style ={{fontWeight: 'bold', fontSize: 30}}> + </Text>
                            </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.text}> End Game </Text>
                            <TouchableHighlight style={styles.addQuestionButton} 
                             underlayColor={"silver"}
                                onPress={this.handleClick}>
                                <Text style ={{fontWeight: 'bold', fontSize: 30}}> + </Text>
                            </TouchableHighlight>
                    </View>

                    {/*<TouchableHighlight
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

//This is the title that appears on the top
//it has to be the same name as your class
//{CLASSNAME}.navigationOptions = {}
QuestionsForm.navigationOptions = {
    title: 'Questions Form',
}

const styles = StyleSheet.create({

    container:{
        flex: 1, 
        flexDirection: 'row',
    },

    text: {
        marginTop: 10, 
        fontWeight: 'bold', 
        fontSize: 30, 
        backgroundColor: 'lightgrey', 
        width: Dimensions.get("window").width * .5,
    },

    addQuestionButton: {
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: Dimensions.get("window").width/4,
        marginTop: 10,
    },

    submit: {
      backgroundColor: 'silver',
      padding: 10,
      width: Dimensions.get("window").width * .5,
      justifyContent: 'center',
      alignItems: 'center',
      left: Dimensions.get("window").width/4,
   },
});

 export default QuestionsForm;