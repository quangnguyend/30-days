import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeComponent from './components/HomeComponent';
import {
  Platform,
  StyleSheet,
  View,
  Image,
  Animated,
  Easing
} from 'react-native';

export default class App extends Component{

  static navigationOptions = ({ navigation }) => ({
    header: null,
  });

  constructor(props) {
    super(props);

    this.state = {
      scale: new Animated.Value(0)
    }
  }

  componentDidMount() {
    const { navigate } = this.props.navigation;
    Animated.timing(this.state.scale, {
      toValue: 20,
      duration: 500,
      easing: Easing.linear(),
    }).start(() => navigate("Home"));
  }

  render() {
    let animate = this.state.scale;
    return (
      <View style={styles.container}>
        <Animated.Image source={require('./media/logo.png')} 
          style={{
            transform: [{scale: this.state.scale}]
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00aced',
  }
});

