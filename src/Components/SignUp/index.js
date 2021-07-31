import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {View, Text, TextInput,Image, TouchableOpacity} from 'react-native';
import CustomButton from '../../Components/common/ButtonComponent';
import Container from '../../Components/common/Container';
import Input from '../../Components/common/Input';
import { LOGIN } from '../../Constants/routeNames';
import styles from './styles';
const RegisterComponent = ({onSubmit,onChange,form,errors}) => {
    const {navigate} = useNavigation();
    const triggerNavigate =()=>{
      navigate(LOGIN);
    }
    return (
      <Container>
        <Image
          style={[styles.logoImage]}
          source={require('../../assets/images/logo.png')}
        />
        <View>
          <Text style={styles.title}>Welcome to RN Contacts</Text>
          <Text style={styles.subTitle}>Create a free account</Text>

          <View style={styles.form}>
            <Input
              label="Username"
              iconPosition="right"
              placeholder="Enter Username"
              //icon={<Text>HIDE</Text>}
              //error={"This field is required"}
              error={errors.userName}
              onChangeText={value => {
                onChange({name: 'userName', value});
              }}
            />
            <Input
              label="First Name"
              iconPosition="right"
              placeholder="Enter First Name"
              //icon={<Text>HIDE</Text>}
              //error={"This field is required"}
              onChangeText={value => {
                onChange({name: 'firstName', value});
              }}
              error={errors.firstName}
            />
            <Input
              label="Last Name"
              iconPosition="right"
              placeholder="Enter Last Name"
              //icon={<Text>HIDE</Text>}
              //error={"This field is required"}
              error={errors.lastName}
            />
            <Input
              label="Email"
              iconPosition="right"
              placeholder="Enter Email"
              //icon={<Text>HIDE</Text>}
              //error={"This field is required"}
              error={errors.email}
            />
            <Input
              label="Password"
              icon={<Text>Show</Text>}
              secureTextEntry={true}
              iconPosition="right"
              placeholder="Enter Password"
              error={errors.password}
            />
            <CustomButton onPress={onSubmit} primary title="Submit" />

            <View style={styles.createSection}>
              <Text style={styles.infoText}>Already have an account?</Text>
              <TouchableOpacity onPress={triggerNavigate}>
                <Text style={styles.linkBtn}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Container>
    );
}

export default RegisterComponent
