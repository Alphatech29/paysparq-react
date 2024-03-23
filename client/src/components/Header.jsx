import React from 'react'
import {Button, Navbar } from 'flowbite-react'
import paysparqLogo from "../../assets/image/paysparq-logo.png"


export default function Header() {
    
  return (
  <Navbar className='fixed rounded-3xl right-10 left-10 top-4 sm:px-12 sm:py-2 mt-30 z-10  bor'>
     <Navbar.Brand href="/">
     <img src={paysparqLogo} className='w-36' alt="paysparq-logo" />
      </Navbar.Brand>
      <Navbar.Collapse >
        <Navbar.Link className='menu-link' href="/" active>Home</Navbar.Link>
        <Navbar.Link className='menu-link' href="#">Products</Navbar.Link>
        <Navbar.Link className='menu-link' href="/about">About Us</Navbar.Link>
        <Navbar.Link className='menu-link' href="/contact">Contact Us</Navbar.Link>
      </Navbar.Collapse>
      <Button className='px-4'>Get started</Button>
  </Navbar>


  )
}
