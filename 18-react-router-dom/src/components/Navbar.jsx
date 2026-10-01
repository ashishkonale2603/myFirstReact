import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bar'>
      <h2 className='brand-name'>Shemaroo</h2>
      <div className='nav-pages'>
        <Link className='page' to='/'>Home</Link>
        <Link className='page' to='/about'>About</Link>
        <Link className='page' to='/contact'>Contact</Link>
        <Link className='page' to='/product'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar