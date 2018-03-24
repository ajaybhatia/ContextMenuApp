import React, { Component } from 'react';
import { View, Text } from 'react-native';

class About extends Component {
  static navigationOptions = {
    title: 'About',
    headerStyle: {
      backgroundColor: '#3F51B5',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: 'Roboto_medium',
      fontWeight: '400',
    }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>About</Text>
      </View>
    );
  }
}

export default About;
