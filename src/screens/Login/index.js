import React from 'react'
import { View, Text, TextInput } from 'react-native'
import Container from '../../Components/common/Container'
import Input from '../../Components/common/Input';

const Login = () => {
     const [value, onChangeText] = React.useState('Useless Text');
    return (
      <Container>

        <Input
          label = "Username"
          onChangeText={onChangeText}
          value={value}
        />
      </Container>
    );
}

export default Login
