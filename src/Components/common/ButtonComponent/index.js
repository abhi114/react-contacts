import React, { useState } from 'react'
import { View, Text, TextCustomButton, TouchableOpacity, ActivityIndicator } from 'react-native'
import colors from '../../../assets/themes/colors';
import styles from './styles';
const CustomButton = ({title,secondary,primary,danger,disabled,loading,onPress}) => {
    //checking if CustomButton is being focused or not

    const getBgColor = ()=>{
        if(disabled){
            return colors.grey;
        }
        if(primary){
            return colors.primary;
        }
        if(danger){
            return colors.danger;
        }if(secondary){
            return colors.secondary;
        }else{
            return colors.grey;
        }
    }
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
        <View style = {styles.loaderSection} >
          {loading && <ActivityIndicator color={primary?colors.secondary:colors.primary}/>}
          {title && (
            <Text style={{color: disabled ? 'black' : colors.white,paddingLeft:loading?5:0}}>
              {title}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    );
}

export default CustomButton
