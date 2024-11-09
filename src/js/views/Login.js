import React, { useContext, useEffect, useReducer } from 'react'
import { useForm } from '../commons/hooks/useForm';
import { Context } from '../store/contactContext';
import { agendaTypes } from '../types/types';
import { contactReducer } from '../store/contactReducer';
import { createAgenda } from '../services/agendaServices';

export const Login = () => {
  const { formData, handleChange } = useForm({ slug: "" })
  const { store, dispatch } = useContext(Context)

  

  const handleSubmit = (event) => {
    event.preventDefault()    
    createAgenda(formData.slug)
    .then(resp => {
      localStorage.setItem("user",JSON.stringify(resp))
      dispatch({type: agendaTypes.CREATE, payload: { slug: resp.slug, id: resp.id }})
    })
    .catch(error => {
      console.log(error);      
    })
    
    
    
  }

  useEffect(() => {
    
    return () => {
      
    };
  }, []);

  return (
    <form className='w-50 m-auto' onSubmit={handleSubmit}>
      <h2 className='text-center'>Welcome!</h2>
      <div className="mb-3">
        <label 
          htmlFor="exampleInputFullName" 
          className="form-label"           
          >Full Name</label>
        <input 
          type="text" 
          className="form-control" 
          id="exampleInputFullName" 
          aria-describedby="fullNameHelp" 
          placeholder='Full Name'
          name="slug"
          onChange={handleChange}
          /> 
      </div>            
      <button type="submit" className="btn btn-primary w-100 mb-3">Go!</button>
      
    </form>
  )
}
