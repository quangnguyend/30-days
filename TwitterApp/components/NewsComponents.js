import React, { Component } from 'react';
import { Text } from 'react-native';

export default class NewsComponent extends Component {

  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./../media/pen.png')} />
    ),
  };

  render() {
    return (
      <Text>ABC</Text>
    )
  }
};
