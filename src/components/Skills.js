import React from 'react'

function Skills() {
  return (
    <div className=' skills container-fluid '>
      <h2 className=' mt-5 fs-2s'>What I know</h2>
      <div className='row row-cols-md-2 gap-4 '>
        <div className='skill__one col shadow-lg pb-3   '>
          <h3 className=' text-white mt-3 ps-3 '>Frontend</h3>
          <div className='row row-cols-md-2 mt-2  '>
            <h6 className='skill__html col ms-4 mt-3 align-items-center text-white me-2  '>HTML</h6>
            <h6 className='skill__css col mt-3 text-white ms-4 align-items-center ps-3 pt-2 me-2  '>CSS</h6>
            <h6 className='skill__js col mt-3 text-white align-items-center pt-2 ms-3 me-2'>JavaScript</h6>
            <h6 className='skill__re col mt-3  text-white align-items-center pt-2 ms-3 ps-3 me-2'>React-JS</h6>
            <h6 className='skill__ty col text-white align-items-center mt-3 pt-2 ms-3 ps-2 me-2'>Typescript</h6>
            <h6 className='skill__bo col text-white align-items-center mt-3 pt-2 ms-3 ps-3  me-2'>Bootstrap</h6>
          </div>
        </div>
        <div className='skill__one col shadow-lg  '>
          <h3 className=' text-white mt-3 ps-3 '>Backend</h3>
          <div className='row row-cols-md-2 mt-2  '>
            <h6 className='skill__no col ms-4 mt-3 align-items-center text-white ps-3 pt-2 me-2'>Node-JS</h6>
            <h6 className='skill__mo col mt-3 text-white align-items-center pt-2 ms-3 me-2'>MongoDB</h6>
            <h6 className='skill__ex col mt-3 text-white ms-4 align-items-center ps-3 pt-2 me-2'>Express-JS</h6>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills