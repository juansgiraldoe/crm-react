// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './layout/Login'
import Layout from './layout/Layout'
import Inicio from './pages/Inicio'
import LoginForm from './pages/LoginForm'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}>
          <Route index element={<LoginForm/>}/>
        </Route>
        <Route path='/clientes' element={<Layout/>}>
          <Route index element={<Inicio/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
