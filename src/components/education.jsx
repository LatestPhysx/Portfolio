import React from 'react'
import '../App.css'
import BallIcon from '../assets/ball.svg?react'

const Education = () => {
    return (<>
        <div className='w-full my-10 about p-5 h-fit flex justify-center align-middle capitalize font-bold text-4xl'>
            <span className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>my education</span>
        </div>
        <section className='w-full about capitalize h-fit p-5 grid mt-10 gap-15 md:gap-0 grid-cols-1'>
            <div className='w-full p-5 md:p-0 grid grid-cols-1 md:grid-cols-3'>
                <div className='grid mx-0 md:mx-auto grid-cols-1'>
                    <span className='font-bold text-lg'>Ifiag vocational school - Casablanca</span>
                    <span className='text-neutral-600 dark:text-neutral-400'>2 years (2023-2025)</span>
                </div>
                <div className='relative hidden md:flex justify-center overflow-hidden'>
                    <BallIcon className='hidden md:block z-10' />
                    <div className='w-[0.5px] bg-black absolute h-full hidden md:block top-0 bottom-0'></div>
                </div>
                <div className='grid gap-5 grid-cols-1'>
                    <span className='font-bold text-lg'>Associate Degree / Higher National Diploma in IT development</span>
                    <span className='text-neutral-600 dark:text-neutral-400'>focused on software development, programming, and practical IT solutions.</span>
                </div>
            </div>
            <div className='p-5 md:p-0 relative hidden md:flex h-40 justify-center overflow-hidden'>
                <div className='w-[0.5px] bg-black absolute h-full hidden md:block top-0 bottom-0'></div>
            </div>
            <div className='p-5 md:p-0 w-full grid grid-cols-1 md:grid-cols-3'>
                <div className='grid mx-0 md:mx-auto grid-cols-1'>
                    <span className='font-bold text-lg'>Ifiag vocational school - Casablanca</span>
                    <span className='text-neutral-600 dark:text-neutral-400'>2 years (2023-2025)</span>
                </div>
                <div className='relative hidden md:flex justify-center overflow-hidden'>
                    <BallIcon className='hidden md:block z-10' />
                    <div className='w-[0.5px] bg-black absolute h-full hidden md:block top-0 bottom-0'></div>
                </div>
                <div className='grid gap-5 grid-cols-1'>
                    <span className='font-bold text-lg'>Training in Personal and Professional Coaching</span>
                    <span className='text-neutral-600 dark:text-neutral-400'>developing skills in communication, leadership, and individual performance enhancement.</span>
                </div>
            </div>
            <div className='p-5 md:p-0 relative hidden md:flex h-40 justify-center overflow-hidden'>
                <div className='w-[0.5px] bg-black absolute h-full hidden md:block top-0 bottom-0'></div>
            </div>
            <div className='p-5 md:p-0 w-full grid grid-cols-1 md:grid-cols-3'>
                <div className='grid mx-0 md:mx-auto grid-cols-1'>
                    <span className='font-bold text-lg'>Imam Malik High School - Casablanca</span>
                    <span className='text-neutral-600 dark:text-neutral-400'>2022–2023</span>
                </div>
                <div className='relative'>
                    <BallIcon className='hidden md:block mx-auto' />
                </div>
                <div className='grid gap-5 grid-cols-1'>
                    <span className='font-bold text-lg '>Baccalaureate in Life and Earth Science</span>
                    <span className='text-neutral-600 dark:text-neutral-400'>Studied Life and Earth Sciences with a focus on mathematics, physics, and life science, gaining a solid scientific foundation and enhancing analytical and problem-solving skills.</span>
                </div>
            </div>
        </section>
    </>)
}

export default Education