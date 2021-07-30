import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './styles';
const Input = ({onChangeText,icon,style,value,label}) => {
    return (
      <View style = {styles.wrapper}>
        {label && <Text>{label}</Text>}
        <View>
          <View>{icon && icon}</View>
          <TextInput
            onChangeText={onChangeText}
            style={[styles.textInput, style]}
            value={value}
          />
        </View>
      </View>
    );
}

export default Input
