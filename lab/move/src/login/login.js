import React, { Component } from 'react'
import { useNavigate } from 'react-router'

function Login() {
    const nav=useNavigate()
function save() {
  localStorage.setItem("flag","true")
  nav("/Pre")
}
  
    return (
      <button className='btn btn-danger' onClick={save}>login</button>
    )
  
}

export default Login