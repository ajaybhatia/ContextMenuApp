import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Contact extends Component {
  static navigationOptions = {
    title: 'Contact',
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
        <Text>Contact</Text>
      </View>
    );
  }
}

export default Contact;
