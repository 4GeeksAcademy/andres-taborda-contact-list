import React, { useState } from 'react'

export const useForm = ( initialForm = {} ) => {
  const [formData, setFormData] = useState(initialForm)

  function formatPhoneNumber(value) {
    const phoneNumber = value.replace(/\D/g, ''); 
    return phoneNumber.replace(/(\d{3})(\d{2})(\d{2})(\d{2})/, '$1-$2-$3-$4');
  }

  const handleChange = (event) => {
    const { target } = event 
    if (target.name === 'phone') {
      target.value = formatPhoneNumber(target.value)
    }   
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const preDataForm = (data) => {
    setFormData({
      ...formData,
      ...data
    })
  }

  return { formData, handleChange, preDataForm }
}
