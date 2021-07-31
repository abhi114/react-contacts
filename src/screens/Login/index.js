import React from 'react'
import LoginComponent from '../../Components/Login/index'

const Login = () => {
     const [value, onChangeText] = React.useState('');
    return (
      <LoginComponent/>
    );
}

export default Login
