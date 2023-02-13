import React from 'react'
import { Navigate, Outlet } from 'react-router'

function Auth() {
    const flag=localStorage.getItem("flag")
  return (
      <div>{flag ? <Outlet /> : <Navigate to="/Login"/>}</div>
  )
}

export default Auth