import React from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'

import Layout from './layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Service from './pages/Service/Service'
import Contact from './pages/Contact/Contact'

function App() {

  return (
    <>
      <Layout>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='service' element={<Service/>} />
          <Route path='project' element={<Projects/>} />
          <Route path='contact' element={<Contact/>} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
