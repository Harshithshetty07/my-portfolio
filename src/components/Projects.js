import React from 'react'

function Projects() {
  return (
    <div className=' container-fluid '>
        <h2 className=' mt-5 '>Projects</h2>
        <div className=' project row row-cols-md-3 g-4 mt-1  '>
            <div className='col'>
            <a  href='https://responsive-gym-website-xi.vercel.app/' target='_blank' rel="noreferrer">
                <div className='card h-100 shadow-lg '>
                    <div className='project__img'></div>
                    <div className=' card-body '>
                        <h5 className=' card-title ps-1 '>Gym Website</h5>
                        <p className=' card-text '>React, css, Html, animation</p>
                    </div>
                </div>
                </a>
            </div>
            <div className='col '>
            <a  href='https://github.com/Harshithshetty07/employes-data-table/tree/master' target='_blank' rel="noreferrer">
                <div className='card h-100 shadow-lg '>
                    <div className='project__three '></div>
                    <div className=' card-body'>
                        <h5 className=' card-title ps-1 '>Employee Data Table</h5>
                        <p className=' card-text '>React, Bootstarp, Node-JS, Express-JS, MongoDB</p>
                    </div>
                </div>
                </a>
            </div>
            <div className='col'>
            <a  href='https://harshithreactproject1.netlify.app/' target='_blank' rel="noreferrer">
                <div className='card h-100 shadow-lg  '>
                    <div className='project__two'></div>
                    <div className=' card-body '>
                        <h5 className=' card-title ps-1 '>Admin Dashboard</h5>
                        <p className=' card-text '>React, css, Html, Tailwind css</p>
                    </div>
                </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Projects