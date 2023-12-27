import React from 'react'
import { GoHome } from "react-icons/go";
import { FaFireFlameCurved } from "react-icons/fa6";
import {  FiGithub  } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";

function SideBar() {
  return (
    <div className=' container mt-3 '>
      <div className=' d-flex '>
      <div className='custom-sizes '></div>
            <div className=' custom-sizes'></div>
      </div>
      <div className=' mt-4'>
      <div className='row'>
        <div className='home bg-white shadow  col-auto min-vh-100 rounded-3 '>
          <div className='homes d-flex justify-content-center align-items-center py-2 gap-3 mt-4'>
            <GoHome color='blue' size={28} className=' d-grid'/>Home
          </div>
          <div className='homes d-flex justify-content-center align-items-center py-2 gap-3 mt-3'>
            <FaFireFlameCurved color='blue' size={28} className=' d-grid'/>Trending
          </div>
          <div className=' ms-3 mt-5 fw-semibold '>
            <h5>Socials</h5>
          </div>
          <div className='socials d-flex justify-content-center align-items-center py-2 gap-3 mt-3'>
            <a  href='https://www.linkedin.com/in/harshith-kv-433620276/' target='_blank' rel="noreferrer" className=' d-flex gap-3 '>
            <ImLinkedin2 color='blue' size={26} className=' d-grid'/>
            <p className=' text-black mt-1 '>LinkedIn</p>
            </a>
          </div>
          <div className='socials d-flex justify-content-center align-items-center py-2 mt-1'>
            <a  href='https://github.com/Harshithshetty07' target='_blank' rel="noreferrer" className='github d-flex gap-3 '>
            <FiGithub color='green' size={26} className=' d-grid'/>
            <p className=' text-black mt-1 '>Github</p>
            </a>
          </div>
          <div className='socials d-flex justify-content-center align-items-center py-2 gap-3 mt-1'>
            <a  href='https://www.instagram.com/_rakshith__shetty___/' target='_blank' rel="noreferrer" className=' d-flex gap-3 '>
            <FaInstagram color='red' size={26} className=' d-grid'/>
            <p className=' text-black mt-1 '>Instagram</p>
            </a>
          </div>
          
        </div>
      </div>
      </div>
    </div>
  )
}

export default SideBar