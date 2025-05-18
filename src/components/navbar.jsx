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
import CV from '../assets/CV Omar Bahloul.pdf'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
    const [sideMenu, showSideMenu] = useState(false);
    let sideMenuStyle;
    let sideDiv;
    if (sideMenu) {
        sideMenuStyle = 'flex z-20 items-center sm:items-start flex-col gap-5 bg-gray-900 capitalize transition-all duration-700 ease-in xl:hidden fixed w-1/2 p-3 justify-center text-white h-full top-0 right-0 bg-black'
        sideDiv = 'xl:hidden flex bg-gray-100 flex-col gap-5 text-center text-2xl font-bold justify-center duration-700 ease-in transition-all fixed top-0 left-0 w-1/2 h-full bg-black text-white capitalize p-5 opacity-50'
        document.body.style.overflow = 'hidden';
    }
    else{
        sideMenuStyle = 'flex flex-col gap-5 capitalize transition-all duration-700 ease-in xl:hidden fixed w-1/2 p-3 justify-center text-white h-full top-0 -right-full bg-black'
        sideDiv = 'xl:hidden bg-gray-900 opacity-100 flex flex-col duration-700 ease-in transition-all gap-5 text-center text-2xl font-bold justify-center fixed top-0 -left-full w-1/2 h-full bg-black text-white capitalize overscroll-auto overscroll-none transition-all duration-700 ease-in'  
        document.body.style.overflow = 'auto';
    }

    return (<>
        <nav className='w-full navbar flex justify-between items-center h-fit px-2.5 py-5 duration-700 sm:p-8'>
            <span className='flex text-sm items-center'><EmailIcon className='mr-1 sm:mr-2.5' /><a href="mailto:omarbahloul2004@gmail.com"> omarbahloul2004@gmail.com</a></span>
            <button className='hover:cursor-pointer' onClick={() => showSideMenu((prevState) => !prevState)}><MenuIcon className='sm:mr-1.5 xl:hidden' /></button>
            <div className='hidden xl:flex capitalize items-center content-center gap-5'>
                <HashLink className='rounded-xl p-3 hover:cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black duration-700' scroll={e => e.scrollIntoView({ behavior: 'smooth', block: 'start' })} to='#about'><span>about</span></HashLink>
                <HashLink className='rounded-xl p-3 hover:cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black duration-700' scroll={e => e.scrollIntoView({ behavior: 'smooth', block: 'start' })} to='#education'><span>education</span></HashLink>
                <HashLink className='rounded-xl p-3 hover:cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black duration-700' scroll={e => e.scrollIntoView({ behavior: 'smooth', block: 'start' })} to='#skills'><span>skills</span></HashLink>
                <HashLink className='rounded-xl p-3 hover:cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black duration-700' scroll={e => e.scrollIntoView({ behavior: 'smooth', block: 'start' })} to='#projects'><span>projects</span></HashLink>
                <HashLink className='rounded-xl p-3 hover:cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black duration-700' scroll={e => e.scrollIntoView({ behavior: 'smooth', block: 'start' })} to='#contact'><span>contact</span></HashLink>
                <a target='_blank' href={CV} className='flex hover:cursor-pointer bg-black dark:text-black dark:bg-white hover:bg-gray-300 duration-700 rounded text-white items-center p-2.5'>Resume <DownloadIcon className='ml-1.5' /></a>
            </div>
            <div className={sideMenuStyle}>
                <button onClick={() => showSideMenu((prevState) => !prevState)} className='absolute hover:cursor-pointer top-0 right-0 p-2 sm:p-5'><CloseIcon className='ml-1.5' /></button>
                <HashLink scroll={e => e.scrollIntoView({ behavior: 'smooth', block: 'start' })} className='w-full' to='#about'><span className='flex items-center hover:cursor-pointer justify-center sm:justify-start w-full py-4 px-2 sm:p-5 hover:bg-gray-200 duration-700 hover:text-black rounded'><AboutIcon className='mr-2.5' />about</span></HashLink>
                <HashLink scroll={e => e.scrollIntoView({ behavior: 'smooth', block: 'start' })} className='w-full' to='#education'><span className='flex items-center hover:cursor-pointer justify-center sm:justify-start w-full  py-4 px-2 sm:p-5 hover:bg-gray-200 duration-700 hover:text-black rounded'><EducationtIcon className='mr-2.5' />education</span></HashLink>
                <HashLink scroll={e => e.scrollIntoView({ behavior: 'smooth', block: 'start' })} className='w-full' to='#skills'><span className='flex items-center hover:cursor-pointer justify-center sm:justify-start w-full  py-4 px-2 sm:p-5 hover:bg-gray-200 duration-700 hover:text-black rounded'><ProjectIcon className='mr-2.5' />skills</span></HashLink>
                <HashLink scroll={e => e.scrollIntoView({ behavior: 'smooth', block: 'start' })} className='w-full' to='#projects'><span className='flex items-center hover:cursor-pointer justify-center sm:justify-start w-full  py-4 px-2 sm:p-5 hover:bg-gray-200 duration-700 hover:text-black rounded'><ProjectIcon className='mr-2.5' />projects</span></HashLink>
                <HashLink scroll={e => e.scrollIntoView({ behavior: 'smooth', block: 'start' })} className='w-full' to='#contact'><span className='flex items-center hover:cursor-pointer justify-center sm:justify-start w-full  py-4 px-2 sm:p-5 hover:bg-gray-200 duration-700 hover:text-black rounded'><ContactIcon className='mr-2.5' />contact</span></HashLink>
                <a target='_blank' href={CV} className='flex hover:cursor-pointer bg-white hover:bg-gray-300 duration-700 text-black w-fit rounded items-center p-2 my-4 mx-2 sm:m-5'>Resume <DownloadIcon className='ml-1.5 w-3 h-3' /></a>
            </div>
            <div className={sideDiv}></div>
        </nav>
    </>)
}

export default Navbar