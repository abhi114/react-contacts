import React, { useState } from 'react'
import { View, Text } from 'react-native'
import RegisterComponent from '../../Components/SignUp'

const SignUp = () => {
    const [form,setForm] = useState({});
    const [errors, setErrors] = useState({});

    const onChange = (name,value) =>{
        //we have to change the form for the name input only
        setForm({...form,[name]:value})
    }
    const onSubmit = ()=>{
        //validations
        if(!form.userName){
            setErrors(prev=>{
                return {...prev,userName:"Please add a username"}
            })
        }
        

    }
    return (
        <RegisterComponent onSubmit={onSubmit} onChange={onChange} form={form} errors={errors}/>
    )
}

export default SignUp
