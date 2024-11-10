import { BASE_URL } from "../commons/consts/const"



export const createContact = async (userName, contact) => {
  try {
    const response = await fetch(`${BASE_URL}${userName}/contacts`,{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contact)
      
    })
    const data = await response.json()

    if(!response.ok){
      const erroData = {
        message: response.statusText,
        code: response.status,
        detail: data.detail

      }    
      throw new Error(JSON.stringify(erroData));
    }    
    return data
  } catch (error) {
    return JSON.parse(error.message)
  }

  
}

export const updateContact = async (userName, contact) => {
  try {
    const response = await fetch(`${BASE_URL}${userName}/contacts/${contact.id}`,{
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contact)
      
    })
    const data = await response.json()

    if(!response.ok){
      const erroData = {
        message: response.statusText,
        code: response.status,
        detail: data.detail

      }    
      throw new Error(JSON.stringify(erroData));
    }    
    return data
  } catch (error) {
    return JSON.parse(error.message)
  }

  
}

export const deleteContact = async (userName, idContact) => {
  try {
    const response = await fetch(`${BASE_URL}${userName}/contacts/${idContact}`,{
      method: 'DELETE'      
    })
    

    if(!response.ok){
      const data = await response.json()
      const erroData = {
        message: response.statusText,
        code: response.status,
        detail: data.detail

      }    
      throw new Error(JSON.stringify(erroData));
    }    
  } catch (error) {
    return JSON.parse(error.message)
  }

  
}