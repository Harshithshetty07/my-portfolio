import React from 'react'
import NavBar from './NavBar'
import { IoHandLeftSharp } from "react-icons/io5";
import './Home.css'
import Projects from './Projects';
import Skills from './Skills'
import CV from '../images/HarshithKV_Frontend_Developer.pdf'
import { ImLinkedin2 } from "react-icons/im";
import {  FiGithub  } from "react-icons/fi";

const DashBoard = () => {
  return (
    <div>
       <NavBar/>
      <div className=' container-fluid '>
        <div className='home__content row'>
          <div className='col'>
            <h3 className='home__name'>Harshith KV <IoHandLeftSharp color='#ffb703' className=' pb-2'/> </h3>
            <h3 className='home__sub'>Frontend Developer</h3>
            <p className='home__des'> I'm junior developer with a passion for 
            creating innovative, user-friendly web applications and dedicated to my work.</p>
          </div>
          <div className='col'>
            <div className='home__img'></div>
          </div>
        </div>
        <div className='cv mt-3 '>
        <a href={CV}
         download="" className='cv__name'>Download my CV</a>
        </div>
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Skills />
      </div>
      <div className=' d-flex  gap-4 mt-2   '>
       <div className='link__in d-flex align-items-center py-2 pt-3  gap-2 mt-3'>
            <a  href='https://www.linkedin.com/in/harshith-kv-433620276/' target='_blank' rel="noreferrer" className=' d-flex gap-3 '>
            <ImLinkedin2 color='blue' size={26} className=' d-grid'/>
            <p className=' text-black mt-1 text-white '>LinkedIn</p>
            </a>
          </div>
          <div className=' git__hub d-flex align-items-center py-2 pt-3 gap-2 mt-3'>
            <a  href='https://github.com/Harshithshetty07' target='_blank' rel="noreferrer" className='github d-flex gap-3 '>
            <FiGithub color='green' size={26} className=' d-grid'/>
            <p className=' text-black mt-1 text-white '>Github</p>
            </a>
          </div>
       </div>
      </div>
  )
}

export default DashBoard