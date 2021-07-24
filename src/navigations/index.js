import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';

const AppNavContainer = () => {
  const isLoggedIn = true;
    return (
      <NavigationContainer>
        {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    );
}

//screeens >> home >> drawer
//screen >> Auth >> 

export default AppNavContainer