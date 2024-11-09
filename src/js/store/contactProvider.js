import React, { useReducer } from 'react'
import { contactReducer } from './contactReducer';
import { Context } from './contactContext';


export const ContactProvider = ({children}) => {
  const [store, dispatch] = useReducer(contactReducer, { user: { slug:"", id: null }, contacts: [] });

  return (
    <Context.Provider value={{store, dispatch}}>
      {children}
    </Context.Provider>
  )
}
