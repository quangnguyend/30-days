import React, { Component } from 'react';
import { 
  View, Text, Button, Image, TouchableOpacity, StyleSheet,
  Dimensions, ScrollView, Icon
 } from 'react-native';
 import { TabNavigator } from "react-navigation";
 const {height, width} = Dimensions.get('window');
// import TabNavigator from 'react-native-tab-navigator';
import MessComponent from './MessComponent';
import NewsComponent from './NewsComponents';

export default class HomeComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'home'
    };
  }

  static navigationOptions = ({ navigation }) => ({
    headerLeft: 
    <View style={styles.header}>
      <View style={{flex: 1, alignItems: 'flex-start'}}>
        <TouchableOpacity style={styles.item}>
          <Image source={require('./../media/new-user.png')} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <TouchableOpacity>
          <Image source={require('./../media/twitter.png')} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
        <TouchableOpacity style={styles.item}>
          <Image source={require('./../media/search.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image source={require('./../media/pen.png')} />
        </TouchableOpacity>
      </View>
    </View>
  });

  render() {
    return (
      // <TabNavigator>
      //   <TabNavigator.Item
      //     selected={this.state.selectedTab === 'home'}
      //     onPress={() => this.setState({selectedTab: 'home'})}
      //     title="Home"
      //     renderIcon={() => <Image source={require('./../media/search.png')} />}>
      //     <NewsComponents />
      //   </TabNavigator.Item>
      //   <TabNavigator.Item
      //     badgeText="9"
      //     title="Mess"
      //     renderIcon={() => <Image source={require('./../media/search.png')} />}
      //     selected={this.state.selectedTab === 'mess'}
      //     onPress={() => this.setState({selectedTab: 'mess'})}>
      //     <MessComponent />
      //   </TabNavigator.Item>
      //   <TabNavigator.Item
      //     title="Account"
      //     renderIcon={() => <Image source={require('./../media/search.png')} />}
      //   />
      //   <TabNavigator.Item
      //     title="A"
      //     renderIcon={() => <Image source={require('./../media/search.png')} />}
      //   /> 
      // </TabNavigator>
      <View>
        <TabNavigations navigation={this.props.navigation} />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  header: {
    width,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  item: {
    margin: 10
  },
  icon: {
    width: 26,
    height: 26,
  },
});

const TabNavigations = TabNavigator({
  Mess: {
    screen: MessComponent
  },
  News: {
    screen: NewsComponent
  }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  }
});

HomeComponent.router = TabNavigations.router;