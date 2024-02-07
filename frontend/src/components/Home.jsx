import React from 'react'
import Services from './Services'
import Contact from './Contact'
import About from './About'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <section id="home">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5">
                        <h1 className="display-4 fw-bolder mb-4 text-center text-white">Low Code, High Creativity: Explore, Build, Innovate.</h1>
                        <p className="lead text-center fs-4 mb-5 text-white">Our club is a hub for enthusiasts passionate about exploring the world of web development through innovative low code solutions and technical expertise. We aim to foster a community that thrives on creativity, problem-solving, and cutting-edge technology.
                        </p>
                        <div className="buttons d-flex justify-content-center">
                            <NavLink to="/register" className="btn btn-light me-4 rounded-pill px-4 py-2">Join Our Community</NavLink>
                            <NavLink to="/services" className="btn btn-outline-light me-4 rounded-pill px-4 py-2">Our Services</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <About/>
        <Services/>
        <Contact/>
    </div>
  )
}

export default Home;