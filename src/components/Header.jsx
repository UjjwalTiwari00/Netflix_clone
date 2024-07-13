import React from 'react'
import netflix_logo from '../images/netflix_logo.png'

function Header() {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-zinc-900 z-20'>
        <img className='w-44' src={netflix_logo} alt='logo'/>
    </div>
  )
}

export default Header