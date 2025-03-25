import React from 'react'
import logo from '../assets/password-generator.svg';

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 flex justify-between items-center max-sm:p-2 overflow-hidden'>
        <nav className='w-full flex screen-max-width'>
        <img src={logo} alt="Password Generator Logo" className='w-28 h-28' />
            <div className='flex flex-1 justify-center text-lg gap-10 px-5 cursor-pointer mt-8 sm:text-sm pr-28'>
                <h1 className='text-white'>Generate</h1>
                <h1 className='text-gray-400 hover:text-white transition-all'>About</h1>
            </div>
        </nav>
    </header>
  )
}

export default Navbar