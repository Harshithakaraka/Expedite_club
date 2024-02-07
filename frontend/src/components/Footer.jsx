import React from 'react'
import { NavLink } from 'react-router-dom';
const Footer = () => {
  
  return (
    <div>
          <footer>
        <div class="footer-top">
            <div class="container">
                <div class="footer-day-time">
                    <div class="row">
                        <div class="col-md-8">
                            <ul>
                                <li>Contact Us at Any Time</li>
                            </ul>
                        </div>
                        <div class="col-lg-4">
                            <div class="phone-no">
                                <a href="https://t.me/+6D8VZ0tgn61lZjg1"><i class="fa fa-telegram" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        
                        <h4>About us</h4>
                        <p>Whether you're an experienced developer or just beginning your journey in web development, Expedite welcomes all students eager to explore, learn, and innovate. Join us to unlock the potential of low code development and be part of a dynamic community shaping the future of technology. </p>

                    </div>

                    <div class="col-md-4">
                        <h4>Information</h4>
                        <ul class="address1">
                            <li><i class="fa fa-map-marker"></i>KL University Vaddeswaram</li>
                            <li><i class="fa fa-envelope"></i><a href="mailto:#">expedite.techclub@kluniversity.in</a></li>
                            <li><i class="fa fa-telegram" aria-hidden="true"></i> <a href="https://t.me/+6D8VZ0tgn61lZjg1">Expedite</a></li>
                        </ul>
                    </div>

                    <div class="col-md-4">
                        <h4>Follow us</h4>
                        <ul class="social-icon">
                            <li><a href="https://www.linkedin.com/company/expedite-club/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            <li><a href="https://instagram.com/expedite_club"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="https://www.youtube.com/@ExpediteKLUniversity"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-sm-5">
                        <p >Made with <i class="fa fa-heart"></i> by Harshitha
                        </p>
                    </div>
                    <div class="col-sm-7">
                        <ul>
                            <li><NavLink to="/" >Home</NavLink></li>
                            <li><NavLink to="/aboutus" >About</NavLink></li>
                            <li><NavLink to="/services" >Services</NavLink></li>
                            <li><NavLink to="/contact" >Contact Us</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    </div>
  )
}

export default Footer;
