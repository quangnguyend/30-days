import React, { Component } from 'react';
import { Text } from 'react-native';

export default class AccountComponent extends Component {

  static navigationOptions = {
    tabBarLabel: 'Notifications',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./../media/logo.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Text>ABC</Text>
    )
  }
};
