import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {View, Text, TextInput,Image, TouchableOpacity} from 'react-native';
import CustomButton from '../../Components/common/ButtonComponent';
import Container from '../../Components/common/Container';
import Input from '../../Components/common/Input';
import { LOGIN, REGISTER } from '../../Constants/routeNames';
import styles from './styles';
const LoginComponent = () => {
    const {navigate} = useNavigation();
    const triggerNavigate =()=>{
      navigate(REGISTER);
    }
    return (
      <Container>
        <Image
          style={[styles.logoImage]}
          source={require('../../assets/images/logo.png')}
        />
        <View>
          <Text style={styles.title}>Welcome to RN Contacts</Text>
          <Text style={styles.subTitle}>Please Login Here</Text>

          <View style={styles.form}>
            <Input
              label="Username"
              iconPosition="right"
              placeholder="Enter Username"
              //icon={<Text>HIDE</Text>}
              //error={"This field is required"}
              
            />
            <Input
              label="Password"
              icon={<Text>Show</Text>}
              secureTextEntry={true}
              iconPosition="right"
              placeholder="Enter Password"
            />
            <CustomButton primary title="Submit" />

            <View style={styles.createSection}>
              <Text style={styles.infoText}>Need a new account?</Text>
              <TouchableOpacity onPress={triggerNavigate}>
                <Text style={styles.linkBtn}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Container>
    );
}

export default LoginComponent
