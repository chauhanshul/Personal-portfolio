import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-4'>
        <div className='flex flex-shrink-0 items-center'>
            <h1 className='text-3xl'>AC</h1>
        </div>
        <div className='m-4 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/anshul-chauhan-a71506217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" ><FaLinkedin/></a>
            <a href="https://github.com/chauhanshul" target='_blank'><FaGithub/></a>
            <a href="#"><FaTwitterSquare/></a>
            <a href="mailto:anshulchauhan6678@gmail.com"><IoMdMailUnread/></a>

        </div>
    </nav>
  )
}

export default Navbar
