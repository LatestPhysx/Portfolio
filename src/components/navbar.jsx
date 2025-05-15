import React, { useState } from 'react'
import '../App.css'
import EmailIcon from '../assets/email.svg?react'
import DownloadIcon from '../assets/download.svg?react'
import CloseIcon from '../assets/close.svg?react'
import MenuIcon from '../assets/menu.svg?react'
import AboutIcon from '../assets/about.svg?react'
import EducationtIcon from '../assets/education.svg?react'
import ProjectIcon from '../assets/projects.svg?react'
import ContactIcon from '../assets/contact.svg?react'

const Navbar = () => {
    const [sideMenu, showSideMenu] = useState(false);
    let sideMenuStyle;
    if (sideMenu) {
        sideMenuStyle = 'flex flex-col gap-5 capitalize transition-all duration-700 ease-in lg:hidden fixed w-1/2 p-3 justify-center text-white h-full top-0 right-0 bg-black'
    }
    else{
        sideMenuStyle = 'flex flex-col gap-5 capitalize transition-all duration-700 ease-in lg:hidden fixed w-1/2 p-3 justify-center text-white h-full top-0 -right-full bg-black'
    }

    return (<>
        <nav className='w-full navbar flex justify-between items-center h-fit px-2.5 py-5 duration-700 sm:p-8'>
            <span className='flex text-sm items-center'><EmailIcon className='mr-1 sm:mr-2.5' /> omarbahloul2004@gmail.com</span>
            <button className='hover:cursor-pointer' onClick={() => showSideMenu((prevState) => !prevState)}><MenuIcon className='sm:mr-1.5 lg:hidden' /></button>
            <div className='hidden lg:flex capitalize items-center content-center gap-5'>
                <span>about</span>
                <span>education</span>
                <span>projects</span>
                <span>contact</span>
                <button className='flex bg-black dark:text-black dark:bg-white rounded text-white items-center p-2.5'>Resume <DownloadIcon className='ml-1.5' /></button>
            </div>
            <div className={sideMenuStyle}>
                <button onClick={() => showSideMenu((prevState) => !prevState)} className='absolute hover:cursor-pointer top-0 right-0 p-2 sm:p-5'><CloseIcon className='ml-1.5' /></button>
                <span className='flex items-center py-4 px-2 sm:p-5 hover:bg-gray-200 duration-700 hover:text-black rounded'><AboutIcon className='mr-2.5' />about</span>
                <span className='flex items-center py-4 px-2 sm:p-5 hover:bg-gray-200 duration-700 hover:text-black rounded'><EducationtIcon className='mr-2.5' />education</span>
                <span className='flex items-center py-4 px-2 sm:p-5 hover:bg-gray-200 duration-700 hover:text-black rounded'><ProjectIcon className='mr-2.5' />projects</span>
                <span className='flex items-center py-4 px-2 sm:p-5 hover:bg-gray-200 duration-700 hover:text-black rounded'><ContactIcon className='mr-2.5' />contact</span>
                <button className='flex hover:cursor-pointer bg-white hover:bg-gray-300 duration-700 text-black w-fit rounded items-center p-2 my-4 mx-2 sm:m-5'>Resume <DownloadIcon className='ml-1.5 w-3 h-3' /></button>
            </div>
        </nav>
    </>)
}

export default Navbar