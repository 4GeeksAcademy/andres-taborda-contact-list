import React, { useContext, useEffect } from 'react'
import { ContactCard } from '../component/ContactCard'
import { getAgenda } from '../services/agendaServices';
import { Link } from 'react-router-dom';
import { Context } from '../store/contactContext';
import { agendaTypes, contactTypes } from '../types/types';
import { deleteContact } from '../services/contactServices';

export const Contact = () => {
  const { store, dispatch } = useContext(Context)
  const { user, contacts } = store

  const handleDelete = (id) => {
    
    deleteContact(user.slug, id)
    .then(() => dispatch({type: contactTypes.DELETE_SINGLE, payload: {id: id}}))
    .catch(console.log)
    
  }

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
        <Link to="/add-contact" type="button" className="btn btn-success btn-lg" >Add new contact</Link>
      </div>
      {
        contacts.map(contact => (<ContactCard key={contact.id} contact={contact} delete={handleDelete}/>))
      }
      
    </>
  )
}
