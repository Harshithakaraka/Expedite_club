import React from 'react'
import a1 from '../assets/a1.jpg'
import a2 from '../assets/a2.jpg'
import p from '../assets/p.jpg'
import vice from '../assets/vice.jpg'
import te_l from '../assets/te_l.jpg'
import m_l from '../assets/m_l.jpg'
import dr_l from '../assets/dr_l.jpg'
import lo_l from '../assets/lo_l.jpg'
import pr_l from '../assets/pr_l.jpg'
import zl from '../assets/zl.jpg'
import or_l from '../assets/or_l.jpg'
import ol from '../assets/ol.jpg'
import de_l from '../assets/de_l.jpg'
import man_l from '../assets/man_l.jpg'

const About1 = () => {
  return (
    <div>
        <div class="bg-light">
  <div class="container py-5">
    <div class="row h-100 align-items-center py-5">
      <div class="col-lg-6">
        <h1 class="display-4">About us page</h1>
        <p class="lead text-muted mb-0">At EXPEDITE, we specialize in exploring and mastering various low code platforms, including Zoho, OutSystems, Mendix, and Oracle Apex. We offer specialized workshops, hackathons, and projects tailored to each domain, providing our members with hands-on experience and expertise.</p>
       <br></br> <p class="lead text-muted mb-0">Established with the vision to bridge the gap between traditional web development and the evolving landscape of low code solutions, EXPEDITE has been on a mission to empower students with the skills and knowledge needed to thrive in the digital era.</p>

      </div>
      <div class="col-lg-6 d-none d-lg-block"><img src={a1} alt="" class="img-fluid"/></div>
    </div>
  </div>
</div>

<div class="bg-white py-5">
  <div class="container py-5">
    <div class="row align-items-center">
      <div class="col-lg-5 px-5 mx-auto"><img src={a2} alt="" class="img-fluid mb-4 mb-lg-0"/></div>
      <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 class="font-weight-light">What Drives Us:</h2>
        <p class="font-italic text-muted mb-4">We are driven by a passion for innovation and a commitment to continuous learning. Our club fosters an environment that encourages creativity, problem-solving, and pushing the boundaries of traditional development.</p>
        <h2 class="font-weight-light">What Drives Us:</h2>
        <p class="font-italic text-muted mb-4">Our diverse community comprises students from various disciplines and skill levels, united by a shared enthusiasm for web development and technology. We believe in the power of collaboration and knowledge-sharing, creating a supportive space for members to grow and excel.</p>

      </div>
    </div>
  </div>
</div>
<section id="team" class="team">
      <div class="container section-title" data-aos="fade-up">
        <h2 className='justify-content-center'>Our Team</h2>
      </div>

      <div class="container">

        <div class="row gy-5">

          <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="100">
            <div class="member-img">
              <img src={p} class="img-fluid" alt=""/>
              <div class="social">
                <a href="#"><i class="fa fa-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info text-center">
              <h4>K.Thanishq</h4>
              <span>President</span>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="200">
            <div class="member-img">
              <img src={vice} class="img-fluid" alt=""/>
              <div class="social">
                <a href="https://www.linkedin.com/in/bala-vishnu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="fa fa-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info text-center">
              <h4>P.Bala Vishnu</h4>
              <span>Vice President</span>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="300">
            <div class="member-img">
              <img src={te_l} class="img-fluid img-fluid-fixed" alt=""/>
              <div class="social">
                <a href="https://www.linkedin.com/in/harshitha-karaka-2a4a23239/"><i class="fa fa-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info text-center">
              <h4>K.Harshitha</h4>
              <span>Technical Lead</span>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="400">
            <div class="member-img">
              <img src={or_l} class="img-fluid" alt=""/>
              <div class="social">
                <a href="https://www.linkedin.com/in/venkata-shayam-manukonda-85b01727a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="fa fa-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info text-center">
              <h4>M.Venkata Shyam</h4>
              <span>Oracle Apex Lead</span>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="500">
            <div class="member-img">
              <img src={zl} class="img-fluid" alt=""/>
              <div class="social">
                <a href="#"><i class="fa fa-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info text-center">
              <h4>Sai Mahitha</h4>
              <span>Zoho Lead</span>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="600">
            <div class="member-img">
              <img src={ol} class="img-fluid" alt=""/>
              <div class="social">
                <a href="#"><i class="fa fa-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info text-center">
              <h4>S.Varsha</h4>
              <span>Outsystems Lead</span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="600">
            <div class="member-img">
              <img src={m_l} class="img-fluid" alt=""/>
              <div class="social">
                <a href="#"><i class="fa fa-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info text-center">
              <h4>D.Sandeep</h4>
              <span>Mendix Lead</span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="600">
            <div class="member-img">
              <img src={pr_l} class="img-fluid" alt=""/>
              <div class="social">
                <a href="https://www.linkedin.com/in/aparna-vaishnavi-karpurapu-986a07226/"><i class="fa fa-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info text-center">
              <h4>K.Aparna Vaishnavi</h4>
              <span>Public Relations Lead</span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="600">
            <div class="member-img">
              <img src={de_l} class="img-fluid" alt=""/>
              <div class="social">
                <a href="#"><i class="fa fa-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info text-center">
              <h4>P.Seshaeta</h4>
              <span>Designing Lead</span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="600">
            <div class="member-img">
              <img src={dr_l} class="img-fluid" alt=""/>
              <div class="social">
                <a href="#"><i class="fa fa-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info text-center">
              <h4>P.Venkata Lakshmi Sahithi</h4>
              <span>Drafting Lead</span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="600">
            <div class="member-img">
              <img src={lo_l} class="img-fluid" alt=""/>
              <div class="social">
                <a href="#"><i class="fa fa-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info text-center">
              <h4>Y.Jyothsna</h4>
              <span>Logistics Lead</span>
            </div>
            
          </div>
          <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="600">
            <div class="member-img">
              <img src={man_l} class="img-fluid" alt=""/>
              <div class="social">
                <a href="https://www.linkedin.com/in/devallabhaskarganesh/"><i class="fa fa-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info text-center">
              <h4>G.Devalla Bhaskar</h4>
              <span>Management Lead</span>
            </div>
        </div>
      </div>
      </div>
    </section>
    <br></br><br></br>
    </div>
    
  )
}

export default About1
