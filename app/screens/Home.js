import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Body,
  Left,
  Right,
  Title,
  Text
} from 'native-base';

import ToolbarDropdown from '../components/ToolbarDropDown';

class Home extends Component {
  static navigationOptions = {
    header: null
  };

  onPress = ({ label }) => {
    this.props.navigation.navigate(label);
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Title>Home</Title>
          </Left>
          <Body />
          <Right>
            <ToolbarDropdown labels={['About', 'Contact']} onPress={this.onPress} />
          </Right>
        </Header>
      </Container>
    );
  }
}

export default Home;
