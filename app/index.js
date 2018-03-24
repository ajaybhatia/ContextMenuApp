import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';

const Navigation = StackNavigator({
  Home: {
    screen: Home
  },
  About: {
    screen: About
  },
  Contact: {
    screen: Contact
  }
}, {
  initialRouteName: 'Home',
});

export default () => <Navigation />;
