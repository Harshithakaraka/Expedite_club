import React from 'react'
import { NavLink } from 'react-router-dom'
const About = () => {
  return (
    <div>
        <section id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://xperteducationinstitute.co.in/wp-content/uploads/2016/09/about-us.png" alt="" className='w-75 mt-5' />
                    </div>
                    <div className='col-md-6'>
                        <h3 className="fs-5 mb-0 ">About Us</h3>
                        <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
                        <hr className='w-50 dark'/>
                        <p className='lead mb-4'>Our mission is to empower students with the tools and knowledge needed to build exceptional web applications using low code platforms and technical skills.
                        Providing a space for members to delve into the diverse landscape of low code web development tools, frameworks, and methodologies.
                        Offering workshops, hackathons, and mentorship programs that enhance technical proficiency and foster a hands-on learning environment.
                        Encouraging collaboration among members to innovate, ideate, and create web solutions that push the boundaries of traditional development.</p>
                    
                    <NavLink to="/aboutus" className="btn btn-primary rounded-pill px-4 py-2">Read More</NavLink>
                    <NavLink to="/contactus" className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Conatct Us</NavLink>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About