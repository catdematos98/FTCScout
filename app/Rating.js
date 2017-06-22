import React, { Component } from 'react';
import { 
  AppRegistry, 
  Button, 
  View,
  StyleSheet
} from 'react-native';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
    };  
  }

  onclick(type){
    if(type === 'low'){
      this.setState({rating: 'low'});
    }
    else if(type === 'med'){
      this.setState({rating: 'med'});
    }
    else if(type === 'high'){
      this.setState({rating: 'high'});
    }
  }

  render(){
    return(
      <View style={styles.rating}>
        <Button color = "powderblue" title="Low" onPress={this.onclick.bind(this, 'low')}> </Button>
        <Button color = "skyblue" title="Med" onPress={this.onclick.bind(this, 'med')}> </Button>
        <Button color = "steelblue" title="High" onPress={this.onclick.bind(this, 'high')}> </Button>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    padding: 5,
  },
});

export default Rating;