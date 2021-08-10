import React, { useState } from 'react'
import { View, Text, TextCustomButton, TouchableOpacity, ActivityIndicator } from 'react-native'
import colors from '../../../assets/themes/colors';
import styles from './styles';
const Message = ({message,onDismiss,retry,retryFn,primary,danger,info,success}) => {
    
  const [userDismissed,setDismissed] = useState(false);
  //checking if CustomButton is being focused or not


    const getBgColor = ()=>{
        if(primary){
            return colors.primary;
        }
        if(danger){
            return colors.danger; 
        }if(success){
            return colors.success
        }
        if(info){
            return colors.secondary;
        }else{
            return colors.grey;
        }
    }
    return (
      <>
      {userDismissed?null:(
      <TouchableOpacity
        style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: colors.white}}>{message}</Text>

          {retry && !typeof onDismiss === 'function' && (
            <TouchableOpacity onPress={retryFn}>
              <Text style={{color: colors.white}}>Retry</Text>
            </TouchableOpacity>
          )}

          {typeof onDismiss === 'function' && (
            <TouchableOpacity onPress={()=>{
              setDismissed(true);
              onDismiss();
            }}>
              <Text style={{color: colors.white}}>X</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    )}
      </>
    );
}

export default Message
