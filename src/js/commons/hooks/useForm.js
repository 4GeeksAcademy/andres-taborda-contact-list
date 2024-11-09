import React, { useState } from 'react'

export const useForm = ( initialForm = {} ) => {
  const [formData, setFormData] = useState(initialForm)

  const handleChange = (event) => {
    const { target } = event    
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  return { formData, handleChange }
}
