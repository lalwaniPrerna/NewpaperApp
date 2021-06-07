import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import JokeScreen from './screens/JokeScreen'
import HoroscopeScreen from './screens/HoroscopeScreen'
import WeatherScreen from './screens/WeatherScreen'
import NewsScreen from './screens/NewsScreen'
export default class App extends React.Component {
  render() {
    return (
      <View>
       <AppContainer />
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
 JokeScreen : JokeScreen,
 HoroscopeScreen:HoroscopeScreen,
 WeatherScreen:WeatherScreen,
 NewsScreen:NewsScreen

});

const AppContainer = createAppContainer(AppNavigator);
