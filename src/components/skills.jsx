import React from "react";
import '../App.css';
import ReactIcon from '../assets/reactTwo.svg?react'
import TypeScriptIcon from '../assets/typescript.svg?react'
import TailwindIcon from '../assets/tailwindcss.svg?react'
import PhpIcon from '../assets/php.svg?react'
import GitIcon from '../assets/git.svg?react'
import SqlIcon from '../assets/mysql.svg?react'
import CsharpIcon from '../assets/csharp.svg?react'
import JavaIcon from '../assets/java.svg?react'

const Skills = () => {
  return (<>
    <div className='w-full my-10 sora p-5 h-fit flex justify-center align-middle capitalize text-4xl'>
            <span className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>my <span className="font-extrabold">skills</span></span>
    </div>
    <section className="sora font-bold justify-center gap-5 text-center w-full align-center h-fit p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        <div className="w-full h-full rounded m-auto p-10 gap-8 border-2 border-inherit flex flex-col justify-center items-center">
            <span><ReactIcon /></span>
            <span>React</span>
        </div>
        <div className="w-full h-full rounded p-10 gap-8 border-2 border-inherit flex flex-col justify-center items-center">
            <span><TypeScriptIcon /></span>
            <span>Typescript</span>
        </div>
        <div className="w-full h-full rounded p-10 gap-8 border-2 border-inherit flex flex-col justify-center items-center">
            <span><TailwindIcon /></span>
            <span>Tailwind</span>
        </div>
        <div className="w-full h-full rounded whitespace-nowrap p-10 gap-8 border-2 border-inherit flex flex-col justify-center items-center">
            <span><PhpIcon /></span>
            <span>Laravel</span>
        </div>
        <div className="w-full h-full rounded p-10 gap-8 border-2 border-inherit flex flex-col justify-center items-center">
            <span><GitIcon /></span>
            <span>Git</span>
        </div>
        <div className="w-full h-full rounded p-10 gap-8 border-2 border-inherit flex flex-col justify-center items-center">
            <span><SqlIcon /></span>
            <span>Sql</span>
        </div>
        <div className="w-full h-full rounded p-10 gap-8 border-2 border-inherit flex flex-col justify-center items-center">
            <span><CsharpIcon /></span>
            <span>C#</span>
        </div>
        <div className="w-full h-full rounded p-10 gap-8 border-2 border-inherit flex flex-col justify-center items-center">
            <span><JavaIcon /></span>
            <span>Java</span>
        </div>
    </section>
  </>)
}

export default Skills