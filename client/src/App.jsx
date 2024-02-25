import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dasboard'
import Header from  './components/Header'
import Footer from  './components/Footer'



export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about-us' element={<About />}/>
    <Route path='/contact-us' element={<Contact />}/>
    <Route path='/portfolio' element={<Portfolio />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<Signup />}/>
    <Route path='/dashboard' element={<Dashboard />}/>
    </Routes>
    <Footer />
    
    
    </BrowserRouter>
  )
}
