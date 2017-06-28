import React, { Component } from 'react';
import { 
  AppRegistry, 
  View, 
  TextInput,
  StyleSheet,
  Picker,
  Dimensions
} from 'react-native';

class NewGameElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataType: '',
      value: '',
    };  
  }

  updateValue = (text) => {
    this.setState({value: text})
  }
  render(){
    return(
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style = {{width: Dimensions.get("window").width * .5}}
            placeholder = 'Input Game Element'
            autoCapitalize = 'none'
            onChangeText = {this.props.updateValue}
          />  
          <Picker
            style={{width: Dimensions.get("window").width * .5}}
            selectedValue={this.state.dataType}
            onValueChange={(itemValue, itemIndex) => {
                this.setState({dataType: itemValue})
                }
              }
            >
            <Picker.Item label="Rating" value="lowMedHigh" />
            <Picker.Item label="Counter" value="counter" />
          </Picker>
        </View>
    );
  }
}

export default NewGameElement;