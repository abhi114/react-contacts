import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackActions} from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';
import { HOME_NAVIGATOR } from '../Constants/routeNames';



const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
