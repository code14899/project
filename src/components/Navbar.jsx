import React from 'react'
import imgSrc from '../assets/logo.png'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <NavLink exact to = '/'>
    <div className='sticky top-0 flex bg-black text-white py-4 px-8'>
    
        <div className='mx-2'>
            <img
                src={imgSrc}
                className='h-8'
                /> 
        </div>
        <div className='mx-2'>
            Lexi-Vault
        </div>
       
    </div>
    </NavLink>
  )
}

export default Navbar