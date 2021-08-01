import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

import envs from "../config/env"

let headers = {}

//You can create a new instance of axios with a custom config.
const axiosInstance = axios.create({
  baseURL: envs.BACKEND_URL,
  headers,
});
//Axios interceptors are functions that Axios calls for every request. You can use interceptors to transform the request before Axios sends it, or transform the response before Axios returns the response to your code.
axiosInstance.interceptors.request.use(
  async config => {
    //getItem returns a promise that either
    //resolves to stored value when data is found for given key, or returns null otherwise.
    const token = await AsyncStorage.getItem('token');
    if (token) {
      //The HTTP Authorization request header contains the credentials to authenticate a user agent with a server
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    //Javascript Promise reject() is an inbuilt function that returns the Promise object that is rejected for a given reason.
    return Promise.reject(error);
  },
);

export default axiosInstance;