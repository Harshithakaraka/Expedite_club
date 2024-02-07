import React from 'react'
import { NavLink } from 'react-router-dom'

const Nontechnicaldomains = () => {
  return (
    <div>
        <div className="container my-5 py-5">
                <div className="row at-5">
                    <div className="col-12">
                        <h1 className="display-6 text-center mb-4">Non - Technical Domains</h1>
                        <hr className='w-25 mx-auto'/>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-md-4">
                    <div class="card position-relative">
                        <div class="card-body text-lead">
                            <i className='fa fa-truck fa-5x mb-4 text-primary'><i className='fa fa-cubes'></i></i>
                        <h5 class="card-title mb-3 fs-4 fw-bold">Logistics</h5>
                        <p class="card-text lead">Logistics involves the efficient planning, coordination, and implementation of the flow of goods, services, and information from the point of origin to the point of consumption.</p>
                         
                        <NavLink to="/register" className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Register</NavLink>
                    </div>
                </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card">
                        <div class="card-body text-lead">
                        <i className='fa fa-bullhorn fa-5x mb-4 text-primary'><i className='fa fa-user'></i></i>
                        <h5 class="card-title mb-3 fs-4 fw-bold">Public Relations</h5>
                        <p class="card-text lead">PR is the strategic practice of managing communication between an organization and its audience to build and maintain a positive reputation. It involves managing media relations.</p>
                        <NavLink to="/register" className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Register</NavLink>
                    </div>
                </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card">
                        <div class="card-body text-lead">
                        <i className='fa fa-mobile fa-5x mb-4 text-primary'> <i className='fa fa-globe'></i></i>
                        <h5 class="card-title mb-3 fs-4 fw-bold">Social-Media</h5>
                        <p class="card-text lead">Social media management for a club involves overseeing its online presence across various platforms. It includes creating, scheduling, and publishing content, engaging with the audience.</p>
                        <NavLink to="/register" className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Register</NavLink>
                    </div>
                </div>
                    </div>
                    
                </div><br></br>
                <div className='row justify-content-center'>
                <div className="col-md-4">
                    <div class="card">
                        <div class="card-body text-lead">
                        <i className='fa fa-paint-brush fa-5x mb-4 text-primary'><i className='fa fa-pencil-square-o'></i></i>
                        <h5 class="card-title mb-3 fs-4 fw-bold">Designer</h5>
                        <p class="card-text lead">Designers are creative professionals who blend artistic vision with technical skill to conceptualize and create visually appealing solutions across various mediums. They use their expertise in graphic design,</p>
                        <NavLink to="/register" className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Register</NavLink>
                    </div>
                </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card">
                        <div class="card-body text-lead">
                        <i className='fa fa-users fa-5x mb-4 text-primary'><i className='fa fa-cog'></i></i>
                        <h5 class="card-title mb-3 fs-4 fw-bold">Management</h5>
                        <p class="card-text lead">Managing a university technical club involves overseeing its operations, events, and members. It includes tasks like organizing workshops, competitions, and seminars related to the technical <br></br>domain.</p>
                        <NavLink to="/register" className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Register</NavLink>
                    </div>
                </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Nontechnicaldomains