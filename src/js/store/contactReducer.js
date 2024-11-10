import React from 'react'
import { agendaTypes, contactTypes } from '../types/types';

export const contactReducer = (store, action) => {  
  
  
  switch (action.type) {
    case agendaTypes.CREATE: 
      return {
        ...store, 
        user: {...store.user, slug: action.payload.slug, id: action.payload.id}
      };
    
    case agendaTypes.GET_SINGLE: 
      return {
        ...store,
        contacts: action.payload.contacts
      };
    
    case contactTypes.CREATE:
      return {
        ...store,
        contacts: [...store.contacts, action.payload.contact]
      }
    case contactTypes.UPDATE:
      return {
        ...store,
        contacts: store.contacts.map(contact => 
          contact.id === action.payload.contact.id ? action.payload.contact : contact
        )
      }
    case contactTypes.DELETE_SINGLE:
      return {
        ...store,
        contacts: [...store.contacts.filter(contact => contact.id !== action.payload.id)]
      }
  }
  throw Error('Unknown action: ' + action.type);
}
