import React, { useContext, useEffect, useState } from 'react'
import { ContactCard } from '../component/ContactCard'
import { getAgenda } from '../services/agendaServices';
import { Link } from 'react-router-dom';
import { Context } from '../store/contactContext';
import { agendaTypes, contactTypes } from '../types/types';
import { deleteContact } from '../services/contactServices';
import { Modal } from '../component/Modal';
import noContact from "../../img/no-contacts.png";

export const Contact = () => {
  const { store, dispatch } = useContext(Context)
  const { user, contacts } = store
  const [contactToDelete, setContactToDelete] = useState(null);

  const handleContactSelected = (idContactToDelete) => {
    setContactToDelete(idContactToDelete)
  }
  const handleDelete = () => {
    deleteContact(user.slug, contactToDelete)
    .then(() => dispatch({type: contactTypes.DELETE_SINGLE, payload: {id: contactToDelete}}))
    .catch(console.log)
    
  }

  const handleLogout = () => {
    dispatch({type: agendaTypes.LOGOUT})
    localStorage.removeItem('user')
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
      <nav>
        <div className='mb-4 d-flex justify-content-between'>
          <span className='fs-2'>Welcome!, {user.slug}</span>
          <div>
            <Link to="/add-contact" type="button" className="btn btn-success btn-lg" >Add new contact</Link>
            <button className='btn fs-5 ms-3' onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i>
            </button>
          </div>
        </div>
      </nav>
      <hr/>
      {
        contacts.length > 0 
        ? contacts.map(contact => (<ContactCard key={contact.id} contact={contact} delete={handleContactSelected}/>))
        : <>
            <h2 className='text-center mt-5 text-secondary'>No contacts added</h2>
            <figure className='d-flex justify-content-center align-items-center m-0 '>
              <img src={noContact} className="img-fluid w-25 mt-5" alt="No contact illustration"/>
            </figure>
          </>
      }
      <Modal action={handleDelete}/>
    </>
  )
}
