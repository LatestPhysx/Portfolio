import React from 'react'
import GithubIcon from '../assets/github.svg?react'
import LinkedinIcon from '../assets/linkedin.svg?react'
import EmailIcon from '../assets/email.svg?react'

const Contact = () => {
  return (<>
    <section className='mt-10 sora order-last lg:order-first w-full gap-10 capitalize h-fit p-5 grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex flex-col justify-center gap-5 text-center'>
            <span><input className='border-2 border-black rounded w-full lg:w-2/3 text-black p-3 dark:border-white dark:text-white' placeholder='Your Name' type="text" /></span>
            <span><input className='border-2 rounded w-full lg:w-2/3 text-black p-3 dark:border-white dark:text-white' placeholder='Your Email' type="text" /></span>
            <span><textarea className='border-2 h-30 resize-none rounded w-full lg:w-2/3 text-black p-3 dark:border-white dark:text-white' placeholder='Your Message' type="text" name="" id=""></textarea></span>
            <div className='w-full self-center lg:w-2/3 flex gap-5'>
                <button className='whitespace-nowrap border-2 w-full capitalize p-2 rounded relative'>get in touch</button>
                <div className='flex gap-5 ml-auto'>
                    <div className='p-5 border-2 rounded'><GithubIcon /></div>
                    <div className='p-5 border-2 rounded'><LinkedinIcon /></div>
                </div>
            </div>
        </div>
        <div className='flex flex-col order-first lg:order-last gap-10 text-center justify-center'>
            <span className='text-3xl font-extrabold text-start'>let's talk for <br /> something special</span>
            <span className='mx-auto text-gray-700 dark:text-gray-400 text-md text-start'>I’m open to work and internship opportunities where I can develop my skills and make meaningful contributions. I’m eager to learn and ready to take on new challenges. Please feel free to connect if you have any suitable openings!</span>
            <span className='lowercase flex text-start items-center'><EmailIcon className='mr-1 sm:mr-2.5' /> <a href="mailto:omarbahloul2004@gmail.com">omarbahloul2004@gmail.com</a></span>
        </div>
    </section>
  </>)
}

export default Contact