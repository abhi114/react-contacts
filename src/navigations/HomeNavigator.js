import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import { StackActions } from '@react-navigation/native';
import { CONTACT_DETAIL, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from '../Constants/routeNames';
import Contacts from '../screens/Contacts';
import ContactDetails from '../screens/ContactDetails';
import CreateContacts from '../screens/CreateContacts';
import Settings from '../screens/Settings';

//simple component

const HomeNavigator = () => {
    const HomeStack = createStackNavigator();
    return (
      <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
        <HomeStack.Screen
          name={CONTACT_LIST}
          component={Contacts}></HomeStack.Screen>
        <HomeStack.Screen
          name={CONTACT_DETAIL}
          component={ContactDetails}></HomeStack.Screen>
        <HomeStack.Screen
          name={CREATE_CONTACT}
          component={CreateContacts}></HomeStack.Screen>
        <HomeStack.Screen
          name={SETTINGS}
          component={Settings}></HomeStack.Screen>
      </HomeStack.Navigator>
    );
}

export default HomeNavigator
