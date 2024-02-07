import React from 'react'
import { NavLink } from 'react-router-dom'
import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import s4 from '../assets/s4.png'
const Services = () => {
   
  return (
    <div>
        <section id="service">
            <div className="container my-5 py-5">
                <div className="row at-5">
                    <div className="col-12">
                        <h3 className="fs-5 text-center mb-0">Our Domains</h3>
                        <h1 className="display-6 text-center mb-4">Our <b>Domain</b> Expertise</h1>
                        <hr className='w-25 mx-auto'/>
                    </div>
                </div>
                <div className="row justify-content-center" >
                    <div className="col-md-4">
                    <div class="card position-relative">
                        <div class="card-body text-lead">
                            <i className='fa fa-desktop fa-5x mb-4 text-primary'><i className='fa fa-cogs'></i></i>
                        <h5 class="card-title mb-3 fs-4 fw-bold">Technical</h5>
                        <p class="card-text lead">Explore the cutting-edge technologies and tools in web development. Dive into platforms like Zoho, OutSystems, Mendix, and Oracle Apex. Join projects to enhance technical expertise </p>
                         
                        <NavLink to="/techdomains" className="btn btn-primary rounded-pill px-4 py-2">Know More</NavLink>
                    </div>
                </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card">
                        <div class="card-body text-lead">
                        <i className='fa fa-user fa-5x mb-4 text-primary'><i className='fa fa-line-chart'></i></i>
                        <h5 class="card-title mb-3 fs-4 fw-bold">Non-Technical</h5>
                        <p class="card-text lead"> Discover the diverse aspects beyond coding. Engage in leadership, and entrepreneurship activities. Participate in events focusing on project management, and interdisciplinary collaborations.</p>
                        <NavLink to="/nontechdomains" className="btn btn-primary rounded-pill px-4 py-2">Know More</NavLink>
                    </div>
                </div>
                    </div>
                    
                </div>
            </div>
        </section>
       
    </div>
  )
}

export default Services;