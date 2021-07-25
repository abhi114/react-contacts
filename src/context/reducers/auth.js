import React from 'react'
import { View, Text } from 'react-native'
// {type,payload} is destructured way of writing actions
const auth = (state,{type,payload}) => {
    switch(type){
        case "LOGIN":
            return state;
            break;

        default:
            return state
    }
}

export default auth
