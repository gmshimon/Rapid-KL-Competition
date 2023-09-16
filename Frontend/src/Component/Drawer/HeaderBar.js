import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './myStyles.css'
const HeaderBar = () => {
  return (
    <div className='topnav'>
      <Navbar
        fixed='top'
        expand='lg'
        bg='dark'
        variant='dark'
        className='topnav'
      >
        <Navbar.Brand href=''>V-Canteen</Navbar.Brand>
      </Navbar>
    </div>
  )
}

export default HeaderBar
