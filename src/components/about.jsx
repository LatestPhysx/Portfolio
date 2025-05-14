import React from 'react'
import '../App.css'
import FingerIcon from '../assets/finger.svg?react'

const About = () => {
  return (
    <section className='about mt-10 w-full h-fit p-5 flex flex-col text-center justify-center'>
        <span className='mb-5 flex justify-center'>Hi! I’m Omar<FingerIcon className='ml-1 sm:ml-2.5' /></span>
        <span className='mb-5 font-bold text-xl'>Full-Stack Devoloper Based<br /> In Casablanca, Morocco</span>
        <span className='capitalize text-neutral-600'>I specialize in creating Full-Stack Websites<br /> With The Latest Technologies<br /> Visually good looking ui's</span>
    </section>
  )
}

export default About