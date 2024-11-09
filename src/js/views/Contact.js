import React, { useContext, useEffect } from 'react'
import { ContactCard } from '../component/ContactCard'
import { getAgenda } from '../services/agendaServices';
import { Link } from 'react-router-dom';
import { Context } from '../store/contactContext';
import { agendaTypes } from '../types/types';

export const Contact = () => {
  const { store, dispatch } = useContext(Context)
  const { user, contacts } = store

  useEffect(() => {
    getAgenda(user.slug)
    .then(resp => {
      dispatch({type: agendaTypes.GET_SINGLE, payload: { contacts: resp.contacts }})
    })
    .catch(console.log)
  }, []);

  return (
    <>
      <div className='mb-4 text-end'>
        <Link to="../add-contact" type="button" className="btn btn-success btn-lg">Add new contact</Link>
      </div>
      {
        contacts.map(contact => (<ContactCard key={contact.id} contact={contact}/>))
      }
      
    </>
  )
}
