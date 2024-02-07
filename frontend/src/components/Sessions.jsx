import React from 'react'
import { Carousel } from 'bootstrap';

import se1 from '../assets/se1.jpg'
import se2 from '../assets/se2.jpg'
import se3 from '../assets/se3.jpg'
import se4 from '../assets/se4.jpg'
import se5 from '../assets/se5.jpg'
import se6 from '../assets/se6.jpg'

const Sessions = () => {
  return (
    <div>
        <h1 className="display-6 text-center mb-4">Sessions</h1>
        <hr/>
        <h3 className=' text-center mb-4'><i className='fa fa-calendar-times-o fa-5x mb-4 text-primary'></i></h3>
        <h3 className="fs-5 text-center mb-4">No Upcoming sessions were scheduled yet..</h3>
        <h1 className="display-6 text-center mb-4">Our Past Sessions Clippings</h1>
<br/><br/><br/>
<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div>
  <div class="carousel-inner text-center">
    <div class="carousel-item active ">
    <div className="d-flex justify-content-center align-items-center">
      <img src={se1} class="d-block w-100 img-fluid" alt="..." style={{ maxWidth: '700px', height: '300px' }} />
    </div>
    </div>
    <div class="carousel-item ">
<div className="d-flex justify-content-center align-items-center">
      <img src={se2} class="d-block w-100 img-fluid" alt="..." style={{ maxWidth: '500px', height: '300px' }}/>
    </div>
    </div>
    <div class="carousel-item ">
    <div className="d-flex justify-content-center align-items-center">
      <img src={se3} class="d-block w-100 img-fluid" alt="..." style={{ maxWidth: '500px', height: '300px' }}/>
    </div>
    </div>
    <div class="carousel-item ">
    <div className="d-flex justify-content-center align-items-center">
      <img src={se4} class="d-block w-100 img-fluid" alt="..." style={{ maxWidth: '500px', height: '300px' }}/>
    </div>
    </div>
    <div class="carousel-item ">
    <div className="d-flex justify-content-center align-items-center">
      <img src={se5} class="d-block w-100 img-fluid" alt="..." style={{ maxWidth: '500px', height: '300px' }}/>
    </div>
    </div>
    <div class="carousel-item ">
    <div className="d-flex justify-content-center align-items-center">
      <img src={se6} class="d-block w-100 img-fluid" alt="..." style={{ maxWidth: '500px', height: '300px' }}/>
    </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon custom-icon" aria-hidden="false"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon custom-icon" aria-hidden="false"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Sessions