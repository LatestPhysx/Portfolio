import React from 'react'
import '../App.css'
import  EmailIcon from '../assets/email.svg?react'
import  DownloadIcon from '../assets/download.svg?react'

const Navbar = () => {
  return (<>
    <nav className='w-full navbar flex justify-between items-center h-fit p-8'>
        <span className='flex items-center'><EmailIcon className='mr-1.5'/> omarbahloul2004@gmail.com</span>
        <div className='flex capitalize items-center content-center gap-5'>
            <span>about</span>
            <span>education</span>
            <span>projects</span>
            <span>contact</span>
            <button className='flex bg-black dark:text-black dark:bg-white rounded text-white items-center p-2.5'>Resume <DownloadIcon className='ml-1.5' /></button>
        </div>
    </nav>
    </>)
}

export default Navbar