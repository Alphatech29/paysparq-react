import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/products'
import Header from  './components/Header'
import Footer from  './components/Footer/Footer'



export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about-us' element={<About />}/>
    <Route path='/contact-us' element={<Contact />}/>
    <Route path='/product' element={<Product />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}
