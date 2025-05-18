import React from 'react'
import websiteOne from '../assets/websiteOne.png'
import websiteTwo from '../assets/websiteTwo.png'
import websiteThree from '../assets/websiteThree.png'
import LinkIcon from '../assets/link.svg?react'

const Projects = () => {
    return (<>
        <section id='projects' className='w-full capitalize text-white sora h-fit p-5 md:p-10 mt-10 bg-black flex flex-col gap-10'>
            <div className='w-full my-10 p-5 h-fit flex justify-center align-middle capitalize text-4xl'>
                <span className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>my <span className="font-extrabold">Education</span></span>
            </div>
            <div className='w-full my-5 text-center h-fit grid grid-cols-1 gap-10 md:grid-cols-2'>
                <div className='content-center'>
                    <span><img className='rounded-xl' src={websiteOne} alt="" /></span>
                </div>
                <div className='flex flex-col text-start gap-10 justify-center'>
                    <span className='font-extrabold text-3xl'>01</span>
                    <span className='font-bold text-2xl'>Fitness Front-End Website</span>
                    <span className='text-gray-500'>Developed a front-end fitness website using HTML and CSS, emphasizing clear content structure, intuitive navigation, and a visually cohesive layout for showcasing workout plans.</span>
                    <a className='hover:cursor-pointer w-min' target='_blank' href="https://latestphysx.github.io/Fitness/"><span className='hover:cursor-pointer'><button className='hover:cursor-pointer'><LinkIcon /></button></span></a>
                </div>
            </div>
            <div className='w-full my-5 text-center h-fit grid grid-cols-1 gap-10 md:grid-cols-2'>
                <div className='content-center'>
                    <span><img className='rounded-2xl' src={websiteTwo} alt="" /></span>
                </div>
                <div className='flex flex-col text-start justify-center gap-10'>
                    <span className='font-extrabold text-3xl'>02</span>
                    <span className='font-bold text-2xl'>Nexcent Responsive Website</span>
                    <span className='text-gray-500'>A fully responsive website built using modern web technologies to represent Nexcent with a clean, user-friendly design. It adapts seamlessly across devices, ensuring a smooth and engaging experience for all users.</span>
                    <a className='hover:cursor-pointer w-min' target='_blank' href="https://LatestPhysx.github.io/Nexcent-Example/"><span className='hover:cursor-pointer'><button className='hover:cursor-pointer'><LinkIcon /></button></span></a>
                </div>
            </div>
            <div className='w-full my-5 text-center h-fit grid grid-cols-1 gap-10 md:grid-cols-2'>
                <div className='content-center'>
                    <span><img className='rounded-2xl' src={websiteThree} alt="" /></span>
                </div>
                <div className='flex flex-col text-start gap-10 justify-center'>
                    <span className='font-extrabold text-3xl'>03</span>
                    <span className='font-bold text-2xl'>Fedora Front-End Website</span>
                    <span className='text-gray-500'>This Fedora website is a static, non-interactive project focused on clean design and clear presentation. It highlights Fedora’s key features and values through a straightforward layout, offering an informative and visually appealing browsing experience.</span>
                    <a className='hover:cursor-pointer w-min' target='_blank' href="https://latestphysx.github.io/FedoraDesign/"><span className='hover:cursor-pointer'><button className='hover:cursor-pointer'><LinkIcon /></button></span></a>
                </div>
            </div>
        </section>
    </>)
}

export default Projects