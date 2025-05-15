import React from 'react'
import '../App.css'
import FingerIcon from '../assets/finger.svg?react'
import DownloadIcon from '../assets/downloadVariant.svg?react'
import Perso from '../assets/perso.png'

const About = () => {
  return (<>
    <section className='about my-10 w-full h-fit p-5 flex flex-col text-center justify-center'>
      <span className='mb-5 flex justify-center'><img className='w-50 h-auto' src={Perso} alt="" /></span>
      <span className='mb-5 flex justify-center'>Hi! I’m Omar<FingerIcon className='ml-1' /></span>
      <span className='mb-5 font-bold text-xl'>Full-Stack Devoloper Based<br /> In Casablanca, Morocco</span>
      <span className='capitalize text-neutral-600 dark:text-neutral-300'>I specialize in creating Full-Stack Websites<br /> With The Latest Technologies<br /> Visually good looking ui's</span>
    </section>
    <div className='w-full p-5 grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-2 h-fit'>
      <button className='p-4 text-lg m-auto md:m-0 md:ml-auto capitalize bg-black dark:bg-white content-center w-35 h-fit text-white dark:text-black rounded-3xl'>hire me</button>
      <button className='p-4 text-lg m-auto md:m-0 md:mr-auto flex capitalize w-fit h-fit rounded-2xl'>download CV<DownloadIcon className='ml-2.5' /></button>
    </div>
  </>)
}

export default About  