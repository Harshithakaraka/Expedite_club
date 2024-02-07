import React from 'react'
import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import s4 from '../assets/s4.png'
import { NavLink } from 'react-router-dom'

const TechnicalDomains = () => {
  return (
    <div>
        <h1 >Technical Domains</h1>
        <div class="py-5 service-26">
    <div class="container">
        <div class="row wrap-service-26">
            <div class="col-md-7 align-self-center">
                <div class="max-box"> 
                    <h3 class="mt-3">ZOHO</h3>
                    <p class="mt-3">Zoho Creator is a user-friendly, low-code platform enabling easy web app creation through drag-and-drop tools. It offers customization, seamless integration, mobile responsiveness, robust security, scalability, and support resources. </p>
                    <p>With pre-built templates and affordable pricing, it suits diverse business needs, empowering users to build tailored applications without extensive coding knowledge.</p>
                    <NavLink to="/register" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
        <i className="fa fa-user-plus me-2"></i> Register</NavLink>
                </div>
            </div>
            <div class="col-md-5 col-md-5"> 
							<img src={s1} class="img-fluid" /> 
						</div>
        </div>
        <div class="row wrap-service-26 mt-4 pt-3">
            <div class="col-md-6"> 
							<img src={s2} class="img-fluid" /> 
						</div>
            <div class="col-md-6 align-self-center">
                <h3 class="mt-3">MENDIX</h3>
                <p class="mt-3">Mendix is a low-code platform for building web applications without extensive coding. It offers a visual interface, drag-and-drop tools, pre-built components, and integrations for fast development. With collaboration features, scalability, security, and community support, Mendix accelerates app creation and deployment.</p>
                <NavLink to="/register" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
        <i className="fa fa-user-plus me-2"></i> Register</NavLink>
            </div>
        </div>
        <div class="row wrap-service-26">
            <div class="col-md-7 align-self-center">
                <div class="max-box"> 
                    <h3 class="mt-3">Outsystems</h3>
                    <p class="mt-3">OutSystems is a platform offering low-code development for web and mobile applications. It enables users to build, deploy, and manage applications with minimal hand-coding, using a visual development interface. </p>
                    <p>It emphasizes rapid development, scalability, and seamless integration with existing systems, allowing for faster delivery of high-quality applications.</p>
                    <NavLink to="/register" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
        <i className="fa fa-user-plus me-2"></i> Register</NavLink>
                </div>
            </div>
            <div class="col-md-5 col-md-5"> 
							<img src={s3} class="img-fluid" /> 
						</div>
        </div>
        <div class="row wrap-service-26 mt-4 pt-3">
            <div class="col-md-6"> 
							<img src={s4} class="img-fluid" /> 
						</div>
            <div class="col-md-6 align-self-center">
                <h3 class="mt-3">Oracle Apex</h3>
                <p class="mt-3">Oracle APEX (Application Express) is a low-code development platform that empowers users to build scalable web applications quickly. It allows developers to create feature-rich apps using declarative programming, minimizing the need for extensive coding</p>
                <p> APEX offers pre-built components, templates, and drag-and-drop functionality, enabling rapid prototyping and iterative development. </p>
                <NavLink to="/register" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
        <i className="fa fa-user-plus me-2"></i> Register</NavLink>
            </div>
        </div>s
    </div>
</div>
    </div>
  )
}

export default TechnicalDomains;