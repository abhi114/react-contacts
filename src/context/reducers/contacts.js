import React from 'react';
import {View, Text} from 'react-native';
// {type,payload} is destructured way of writing actions
const contacts = (state, {type, payload}) => {
  switch (type) {
    case 'GET_CONTACTS':
      return state;
      break;

    default:
      return state;
  }
};

export default contacts;
