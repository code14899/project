import React from 'react'
import imgSrc1 from "../assets/1.png"
import imgSrc2 from "../assets/2.png"
import imgSrc3 from "../assets/3.png"
import imgSrc4 from "../assets/4.png"
import {NavLink} from 'react-router-dom'
const Dash = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>

        <div className='max-w-3xl px-10 py-10 col-span-1.5 '>
          <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ministry_of_Law_and_Justice.svg/2560px-Ministry_of_Law_and_Justice.svg.png"
              />
        </div>
        <div className='pl-20'>
        <div className='grid grid-rows-4 grid-flow-col gap-4 px-10 py-8 max-w-xs'>
        <NavLink
                exact
                to="/judge"
                > 
            <button>
              <img
                  src={imgSrc1}
                  className='border-2 border-black py-0 h-24 w-9/12'
                  />
            </button>
          </NavLink>
          <NavLink
                exact
                to="/lawyer"
                > 
          <button>
            <img
                src={imgSrc2}
                className='border-2 border-black h-24 w-9/12'
                />
          </button>
          </NavLink>
          <NavLink
                exact
                to="/lawyer"
                > 
          <button>
            <img
                src={imgSrc3}
                className='border-2 border-black h-24 w-9/12'
                />
          </button>
          </NavLink>
          <NavLink
                exact
                to="/lawyer"
                > 
          <button>
            <img
                src={imgSrc4}
                className=' border-2 border-black h-24 w-9/12'
                />
          </button>
          </NavLink>
        </div>
        </div>
        
    </div>
  )
}

export default Dash;