import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {View, Text, TextInput,Image, TouchableOpacity} from 'react-native';
import CustomButton from '../../Components/common/ButtonComponent';
import Container from '../../Components/common/Container';
import Input from '../../Components/common/Input';
import { LOGIN } from '../../Constants/routeNames';
import styles from './styles';
const RegisterComponent = ({onSubmit,onChange,form,loading,error,errors}) => {
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
            {error?.error && <Text>{error.error}</Text>}
            <Input
              label="Username"
              iconPosition="right"
              placeholder="Enter Username"
              //icon={<Text>HIDE</Text>}
              //error={"This field is required"}
              error={errors.userName || error?.username?.[0]}
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
              error={errors.firstName || error?.first_name?.[0]}
            />
            <Input
              label="Last Name"
              iconPosition="right"
              placeholder="Enter Last Name"
              //icon={<Text>HIDE</Text>}
              //error={"This field is required"}
              error={errors.lastName || error?.last_name?.[0]}
              onChangeText={value => {
                onChange({name: 'lastName', value});
              }}
            />
            <Input
              label="Email"
              iconPosition="right"
              placeholder="Enter Email"
              //icon={<Text>HIDE</Text>}
              //error={"This field is required"}
              error={errors.email || error?.email?.[0]}
              onChangeText={value => {
                onChange({name: 'email', value});
              }}
            />
            <Input
              label="Password"
              icon={<Text>Show</Text>}
              secureTextEntry={true}
              iconPosition="right"
              placeholder="Enter Password"
              error={errors.password || error?.password?.[0]}
              onChangeText={value => {
                onChange({name: 'password', value});
              }}
            />
            <CustomButton
              disabled={loading}
              loading={loading}
              onPress={onSubmit}
              primary
              title="Submit"
            />

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
