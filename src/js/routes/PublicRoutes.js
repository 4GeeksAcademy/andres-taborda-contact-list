import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { Login } from '../views/Login'
import { Context } from '../store/contactContext'

export const PublicRoutes = ({ children }) => {
  const { store } = useContext(Context)
  const { user } = store

  return (!user.slug)
  ? children
  : <Navigate to="/contact" replace={true} />
}
