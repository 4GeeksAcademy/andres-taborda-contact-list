import React from 'react'
import { agendaTypes } from '../types/types';

export const contactReducer = (store, action) => {  
  
  
  switch (action.type) {
    case agendaTypes.CREATE: {
      return {
        ...store, 
        user: {...store.user, slug: action.payload.slug, id: action.payload.id}
      };
    }
    case agendaTypes.GET_SINGLE: {
      return {
        ...store,
        contacts: action.payload.contacts
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}
