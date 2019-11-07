/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginView from './Components/LoginView';
import SignupView from './Components/SignupView';

const navigator = createStackNavigator(
  {
    Login: LoginView,
    Signup: SignupView
  },
  {
    initialRouteName:'Login'
  }
);
const App = createAppContainer(navigator);
export default App;

