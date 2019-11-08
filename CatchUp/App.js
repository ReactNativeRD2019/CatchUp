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
import { createAppContainer, NavigationActions } from 'react-navigation';
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack';
import LoginView from './Components/LoginView';
import SignupView from './Components/SignupView';

const navigator = createStackNavigator(
  {
    Login: {
      screen: LoginView,
      navigationOptions: {
        header: null,
      }
    },
    Signup: {
      screen: SignupView,
      navigationOptions: {
        headerTitle: "Sign up",
        headerTintColor: "#a64276",
        backgroundColor:'#a64276',
        headerTitleStyle: {    color: "white",
        fontSize: 16,
        fontFamily: 'KohinoorTelugu-Regular'},
        headerStyle: {
          backgroundColor: '#a64276'
        },
        headerLeft: <HeaderBackButton tintColor='white' onPress={() => navigator("Login")} />
      }
    }
  },
  {
    initialRouteName: 'Login'
  },
);
const App = createAppContainer(navigator);
export default App;

