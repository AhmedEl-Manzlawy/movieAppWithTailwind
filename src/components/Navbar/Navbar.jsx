import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div  className='bg-gray-800 h-16' >
      <Link to="/">
      <div className='text-white font-bold md:text-2xl lg:text-3xl ml-40 pt-2 '>
      Manzo Movies
      </div>
      </Link>
    </div>
  )
}

export default Navbar
