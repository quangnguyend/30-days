import { AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator, Image } from 'react-navigation';
import App from './App';
import HomeComponent from './components/HomeComponent';

const RootApp = StackNavigator({
    Screen: { screen: App },
    Home:   { screen: HomeComponent }
});

AppRegistry.registerComponent('TwitterApp', () => RootApp);
