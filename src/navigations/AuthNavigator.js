import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {StackActions} from '@react-navigation/native';
import { LOGIN, REGISTER } from '../Constants/routeNames';
import Login from '../screens/Login';
import SignUp from '../screens/Register';

//simple component


const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
      <AuthStack.Screen
        name={REGISTER}
        component={SignUp}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
