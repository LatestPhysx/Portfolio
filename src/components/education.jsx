import React from 'react'
import '../App.css'
import BallIcon from '../assets/ball.svg?react'

const Education = () => {
    return (<>
        <div className='w-full about p-5 h-fit flex justify-center align-middle capitalize font-bold text-3xl'>my education</div>
        <section className='w-full h-fit p-5 grid mt-10 gap-15 md:gap-0 grid-cols-1'>
            <div className='w-full text-center grid grid-cols-1 md:grid-cols-3'>
                <div className='grid grid-cols-1'>
                    <span className='font-bold text-lg'>Ifiag vocational school - Casablanca</span>
                    <span className='text-neutral-600 dark:text-neutral-400'>2 years (2023-2025)</span>
                </div>
                <div className='relative overflow-hidden'>
                    <BallIcon className='hidden md:block mx-auto' />
                    <div className='w-[1px] bg-white h-full hidden md:block absolute left-1/2'></div>
                </div>
                <div className='grid gap-5 grid-cols-1'>
                    <span className='font-bold text-lg flex justify-center'>Associate Degree / Higher National Diploma in IT development</span>
                    <span className='text-neutral-600 text-center dark:text-neutral-400'>focused on software development, programming, and practical IT solutions.</span>
                </div>
            </div>
            <div className='w-full h-40 hidden md:grid grid-cols-1 relative'>
                <div className='w-[1px] bg-white h-full hidden md:block absolute left-1/2'></div>
            </div>
            <div className='w-full text-center grid grid-cols-1 md:grid-cols-3'>
                <div className='grid grid-cols-1'>
                    <span className='font-bold text-lg'>Ifiag vocational school - Casablanca</span>
                    <span className='text-neutral-600 dark:text-neutral-400'>2 years (2023-2025)</span>
                </div>
                <div className='relative overflow-hidden'>
                    <BallIcon className='hidden md:block mx-auto' />
                    <div className=' w-[1px] bg-white h-full hidden md:block absolute left-1/2'></div>
                </div>
                <div className='grid gap-5 grid-cols-1'>
                    <span className='font-bold text-lg flex justify-center'>Training in Personal and Professional Coaching</span>
                    <span className='text-neutral-600 dark:text-neutral-400 text-center'>developing skills in communication, leadership, and individual performance enhancement.</span>
                </div>
            </div>
            <div className='w-full h-40 hidden p-5 md:grid grid-cols-1 relative'>
                <div className='w-[1px] bg-white h-full hidden md:block absolute left-1/2'></div>
            </div>
            <div className='w-full text-center grid grid-cols-1 md:grid-cols-3'>
                <div className='grid grid-cols-1'>
                    <span className='font-bold text-lg'>Imam Malik High School - Casablanca</span>
                    <span className='text-neutral-600 dark:text-neutral-400'>2022–2023</span>
                </div>
                <div className='relative'>
                    <BallIcon className='hidden md:block mx-auto' />
                </div>
                <div className='grid gap-5 grid-cols-1'>
                    <span className='font-bold text-lg flex justify-center'>Baccalaureate in Life and Earth Science</span>
                    <span className='text-neutral-600 dark:text-neutral-400'>Studied Life and Earth Sciences with a focus on mathematics, physics, and life science, gaining a solid scientific foundation and enhancing analytical and problem-solving skills.</span>
                </div>
            </div>
        </section>
    </>)
}

export default Education