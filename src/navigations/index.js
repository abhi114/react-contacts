import React,{useContext} from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/Provider';

const AppNavContainer = () => {
  

  const {authState:{isLoggedIn}} = useContext(GlobalContext)
    return (
      <NavigationContainer>
        {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    );
}

//screeens >> home >> drawer
//screen >> Auth >> 

export default AppNavContainer
