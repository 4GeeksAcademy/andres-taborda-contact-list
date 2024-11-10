import React, { useContext } from 'react'
import { useForm } from '../commons/hooks/useForm';
import { Context } from '../store/contactContext';
import { agendaTypes } from '../types/types';
import { createAgenda, getAgendas } from '../services/agendaServices';

export const Login = () => {
  const { formData, handleChange } = useForm({ slug: "" })
  const { dispatch } = useContext(Context)

  const login = async (userName) => {

    const { agendas } = await getAgendas()    
    if (!agendas) {
      return
    }

    const agenda = agendas.find(agenda => agenda.slug === userName)
    if (agenda) {      
      dispatch({type: agendaTypes.CREATE, payload: { slug: agenda.slug, id: agenda.id }})
      localStorage.setItem("user", JSON.stringify(agenda))
      return
    }
    
    const newAgenda = await createAgenda(userName)
    if (newAgenda) {
      dispatch({type: agendaTypes.CREATE, payload: { slug: newAgenda.slug, id: newAgenda.id }})
      localStorage.setItem("user", JSON.stringify(newAgenda))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()  

    if (!formData.slug) {
      return
    }
    login(formData.slug)    

  }

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
          required
          /> 
      </div>            
      <button type="submit" className="btn btn-primary w-100 mb-3">Go!</button>
      
    </form>
  )
}
