import {useNavigation, useFocusEffect} from '@react-navigation/native';
import React, { useState,useEffect,useContext } from 'react'
import { View, Text } from 'react-native'
import RegisterComponent from '../../Components/SignUp'
import envs from "../../config/env"
import { LOGIN } from '../../Constants/routeNames'
import register , {clearAuthState} from  '../../context/actions/auth/register'
import { GlobalContext } from '../../context/Provider'
import axios from '../../helpers/axiosInterceptor'
const SignUp = () => {
    const [form,setForm] = useState({});
    const {navigate} = useNavigation();
    const [errors, setErrors] = useState({});
    const {authDispatch,authState:{error,loading,data}} = useContext(GlobalContext)

    useEffect(() => {
      if (data) {
        navigate(LOGIN);
      }
    }, [data]);

    useFocusEffect(
      React.useCallback(() => {
        return () =>{
        if(data || error){
          clearAuthState()(authDispatch);
        }
      }
      }, [data,error]),
    );

    //console.log(form);
    //const {BACKEND_URL} = envs;
    //console.log('BACKEND_URL',BACKEND_URL);
    //console.log('DEV', __DEV__);
    
    const onChange = ({name,value}) =>{
        //we have to change the form for the name input only
        setForm({...form,[name]:value})

        
        if(value!==''){
            if(name==='password'){
                if(value.length <6){
                    setErrors((prev)=>{
                        return {...prev,[name]:"password should be minimum 6 characters"}
                    })
                }else{
                    setErrors((prev) => {
                      return {
                        ...prev,
                        [name]: null,
                      };
                    });
                }
            }else{
              setErrors((prev) => {
                return {...prev, [name]: null};
              });
            }
        }else{
            setErrors((prev) => {
              return {...prev, [name]: 'This field is required'};
            });
        }
    }
    const onSubmit = ()=>{
        //validations
        if(!form.userName){
            setErrors(prev=>{
                return {...prev,userName:"Please add a username"}
            })
        }
        if (!form.firstName) {
          setErrors(prev => {
            return {...prev, firstName: 'Please add a first name'};
          });
        }
        if (!form.lastName) {
          setErrors(prev => {
            return {...prev, lastName: 'Please add a last name'};
          });
        }
        if (!form.email) {
          setErrors(prev => {
            return {...prev, email: 'Please add a email'};
          });
        }
        if (!form.password) {
          setErrors(prev => {
            return {...prev, password: 'Please add a password'};
          });
        }

        if (
          Object.values(form).length === 5 &&
          Object.values(form).every((item) => item.trim().length > 0) &&
          Object.values(errors).every((item) => !item)
        ) {
          register(form)(authDispatch);
        }
        

    }
    return (
        <RegisterComponent onSubmit={onSubmit} onChange={onChange} form={form} errors={errors} error={error} loading={loading}/>
    )
}

export default SignUp
