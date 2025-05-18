import React, { useRef } from 'react'
import GithubIcon from '../assets/github.svg?react'
import LinkedinIcon from '../assets/linkedin.svg?react'
import EmailIcon from '../assets/email.svg?react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const form = useRef();

    const sendMail = (e) => {
        e.preventDefault();
        const userName = form.current.name.value.trim();
        const userEmail = form.current.email.value.trim();
        const userMessage = form.current.message.value.trim();
        if (!userName || !userEmail || !userMessage) {
            alert('Please Fill Out Your Info Before Sending A Message !');
        }
        else {
            emailjs
                .sendForm('service_g1hkdll', 'template_efhzorp', form.current, {
                    publicKey: '-kYTPLV91AkAMTuVP',
                })
                .then(
                    () => {
                        alert('Message Send Successfully!');
                    },
                    (error) => {
                        alert('Message Not Send, Try Again!');
                        console.log('FAILED...', error);
                    },
                );
        }
    }

    return (<>
        <section id='contact' className='mt-10 sora order-last lg:order-first w-full gap-10 capitalize h-fit p-5 grid grid-cols-1 lg:grid-cols-2'>
            <form ref={form} onSubmit={sendMail}><div className='flex flex-col justify-center gap-5 text-center'>
                <span><input id='name' name="user_name" className='border-2 border-black rounded w-full lg:w-2/3 text-black p-3 dark:border-white dark:text-white' placeholder='Your Name' type="text" /></span>
                <span><input id='email' name="user_email" className='border-2 rounded w-full lg:w-2/3 text-black p-3 dark:border-white dark:text-white' placeholder='Your Email' type="email" /></span>
                <span><textarea id='message' name="message" className='border-2 h-30 resize-none rounded w-full lg:w-2/3 text-black p-3 dark:border-white dark:text-white' placeholder='Your Message' type="text"></textarea></span>
                <div className='w-full self-center lg:w-2/3 flex gap-5'>
                    <button onClick={sendMail} className='hover:cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black duration-700 whitespace-nowrap border-2 w-full capitalize p-2 rounded relative'>get in touch</button>
                    <div className='flex gap-5 ml-auto'>
                        <a target='_blank' href="https://github.com/LatestPhysx"><div className='hover:cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black duration-700 p-5 border-2 rounded'><GithubIcon /></div></a>
                        <a target='_blank' href="https://www.linkedin.com/in/omarbahloul/"><div className='hover:cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black duration-700 p-5 border-2 rounded'><LinkedinIcon /></div></a>
                    </div>
                </div>
            </div></form>
            <div className='flex flex-col order-first lg:order-last gap-10 text-center justify-center'>
                <span className='text-3xl font-extrabold text-start'>let's talk for <br /> something special</span>
                <span className='mx-auto text-gray-700 dark:text-gray-400 text-md text-start'>I’m open to work and internship opportunities where I can develop my skills and make meaningful contributions. I’m eager to learn and ready to take on new challenges. Please feel free to connect if you have any suitable openings!</span>
                <span className='lowercase flex text-start items-center'><EmailIcon className='mr-1 sm:mr-2.5' /> <a href="mailto:omarbahloul2004@gmail.com">omarbahloul2004@gmail.com</a></span>
            </div>
        </section>
    </>)
}

export default Contact