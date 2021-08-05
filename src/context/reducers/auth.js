import React from 'react'
import { View, Text } from 'react-native'
import { CLEAR_AUTH_STATE, REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from '../../Constants/actionTypes';
// {type,payload} is destructured way of writing actions
const auth = (state,{type,payload}) => {
    switch (type) {
      case REGISTER_LOADING:
        //console.log(state);
        return {
          ...state,
          loading: true,
        };

      case REGISTER_SUCCESS:
        //console.log(state);
        return {
          ...state,
          loading: false,
          data: payload,
        };

      case REGISTER_FAIL:
        //console.log(state);
        return {
          ...state,
          loading: false,
          error: payload,
        };
      case CLEAR_AUTH_STATE:
          return {
            ...state,
            loading: false,
            data: null,
            error:null,
          };

      default:
        return state;
    }
}

export default auth
