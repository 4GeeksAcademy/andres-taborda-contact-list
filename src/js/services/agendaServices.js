import { BASE_URL } from "../commons/consts/const"



export const createAgenda = async (userName) => {
  try {
    const response = await fetch(`${BASE_URL}${userName}`,{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      }
      
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
    console.error(error.message);
    
  }
}

export const getAgenda = async (userName) => {
  try {
    const response = await fetch(`${BASE_URL}${userName}`)
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
    console.log(JSON.parse(error.message));
    
  }
}

export const getAgendas = async () => {
  try {
    const response = await fetch(`${BASE_URL}`)
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
    console.log(JSON.parse(error.message));
    
  }
}