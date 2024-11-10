import React, { useContext } from 'react'
import { Contact } from '../views/Contact'
import { Navigate, Route, Routes } from 'react-router'
import { Context } from '../store/contactContext'

export const PrivateRoutes = ({ children }) => {
  const { store } = useContext(Context)
  const { user } = store

  return (user.slug)
  ? children          
  : <Navigate to="/auth/login" />
}
