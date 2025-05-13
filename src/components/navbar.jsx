import React from 'react'
import '../App.css'
import emailLogo from '../assets/email.svg'
import downloadLogo from '../assets/download.svg'

const Navbar = () => {
  return (
    <nav className='w-full navbar flex justify-between items-center h-fit p-8'>
        <span className='flex'><img src={emailLogo} className='mr-3' alt="" /> omarbahloul2004@gmail.com</span>
        <div className='flex capitalize items-center content-center gap-5'>
            <span>about</span>
            <span>education</span>
            <span>projects</span>
            <span>contact</span>
            <button className='flex bg-black rounded text-white p-2.5'>Resume <img src={downloadLogo} className='ml-2' alt="" /></button>
        </div>
    </nav>
  )
}

export default Navbar