import React, { Component } from 'react';
import {
  View,
  TextInput,
  Picker,
  Dimensions,
} from 'react-native';

class NewGameElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataType: '',
      elementName: '',
    };
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{ width: Dimensions.get('window').width / 2 }}
          placeholder="Input Game Element"
          autoCapitalize="none"
          onChangeText={(text) => { this.setState({ elementName: text }); }}
        />
        <Picker
          style={{ width: Dimensions.get('window').width / 2 }}
          selectedValue={this.state.dataType}
          onValueChange={(itemValue) => {
            this.setState({ dataType: itemValue });
          }}
        >
          <Picker.Item label="Rating" elementName="rating" />
          <Picker.Item label="Counter" elementName="counter" />
        </Picker>
      </View>
    );
  }
}

export default NewGameElement;
