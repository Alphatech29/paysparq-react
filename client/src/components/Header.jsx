import React from 'react'
import { Navbar } from 'flowbite-react';

export default function Header() {
    
  return (
  <Navbar className='sticky left-0 right-0 top-0'>
     <Navbar.Brand href="/">
        <img src="image/favicon.png" className="mr-3 h-6 sm:h-9" alt="Alphatech Logo" />
      </Navbar.Brand>
      <Navbar.Collapse >
        <Navbar.Link href="/" active>Home</Navbar.Link>
        <Navbar.Link href="/portfolio">Portfolio</Navbar.Link>
        <Navbar.Link href="/Services">Services</Navbar.Link>
        <Navbar.Link href="/bootcamp">Bootcamp</Navbar.Link>
        <Navbar.Link href="/about">About Us</Navbar.Link>
      </Navbar.Collapse>
  </Navbar>

  )
}
