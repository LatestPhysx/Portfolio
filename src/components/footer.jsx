import React from 'react'
import CopyrightIcon from '../assets/copyright.svg?react'
import ReactIcon from '../assets/reactTwo.svg?react'
import GithubIcon from '../assets/github.svg?react'

const Footer = () => {
  return (
    <footer className='w-full capitalize sora flex flex-col h-fit mt-10 p-1 bg-black text-white dark:bg-white dark:text-black'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 p-5 items-center '>
            <span className='flex justify-center items-center'><CopyrightIcon height='40px' width='40px' className='mr-2.5' />{new Date().getFullYear()} Omar Bahloul</span>
            <span className='flex items-center justify-center'><ReactIcon className='mr-2.5' height='40px' width='40px' />Made In React</span>
            <span className='flex center items-center justify-center'><GithubIcon className='mr-2.5' height='40px' width='40px' /><a target='_blank' href="https://github.com/LatestPhysx/Portfolio">GitHub repository</a></span>
        </div>
    </footer>
  )
}

export default Footer