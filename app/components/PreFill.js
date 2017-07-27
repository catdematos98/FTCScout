import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Alert,
} from 'react-native';
import { Provider } from 'react-redux';

import store from '../store/store';
import Rating from './Rating';
import CounterContainer from '../containers/CounterContainer';


class PreFill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
    };
  }

  render() {
    return (
      <Provider store={store}>
        <View>
          <Text style={{
            marginTop: 10,
            fontWeight: 'bold',
            fontSize: 25,
            backgroundColor: 'lightgrey' }}
          > Autonomous </Text>

          {/*<Rating element="Parking" onPress={this.getValue(this.props.value)} />*/}
          <CounterContainer element="Particles" />
        </View>
      </Provider>
    );
  }
}

export default PreFill;
