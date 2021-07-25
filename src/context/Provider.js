//provide the gloable states
import React, {createContext,useReducer} from 'react';
import authInitialState from './initialsStates/authState';
import contactsInitialState from './initialsStates/contactsInitialState';
import auth from './reducers/auth';
import contacts from './reducers/contacts';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) =>{

   const [authState,authDispatch] = useReducer(auth,authInitialState)
   const [contactsState, contactsDispatch] = useReducer(contacts, contactsInitialState);
    //it return a context provider component 
    //all these will be accessible to other children component
    return  <GlobalContext.Provider value={{authState,contactsState,authDispatch,contactsDispatch}}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalProvider