import React from 'react'
import imgSrc from '../assets/logo.png'
import {NavLink} from 'react-router-dom'
import { ConnectWallet } from '@thirdweb-dev/react'
const Navbar = () => {
  return (
    <NavLink exact to = '/'>
    <div className='sticky top-0 flex justify-between items-center bg-black text-white py-4 px-8'>
    <div className='flex'>
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
        <ConnectWallet />
    </div>
    </NavLink>
  )
}

export default Navbar