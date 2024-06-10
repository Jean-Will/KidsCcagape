import React from 'react'
import ReactDOM from 'react-dom/client'

import "./App.css"
import NavBar from './Components/Navbar/Navbar.tsx'

import Form from './Components/Form/Form.tsx'
import GridUsers from './Components/Grid/GridUsers.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
    < NavBar />
    <Form />
    <GridUsers />
  
    
    </>
    
    
  </React.StrictMode>,
)
