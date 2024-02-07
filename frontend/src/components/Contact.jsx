import React from 'react'
import { useState } from 'react';
const Contact = () => {
    const [msg, setMsg] = useState({
        name:"",
        email:"",
        message:""
    });
     //Handle Inputs
     const handleChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;

        setMsg({...msg, [name]:value});   
    }
    //Handle Submitted
const handleSubmit = async (event)=>{
    event.preventDefault();
    const {name, email, message} = msg;
    try {
        const res = await fetch('/message', {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body :JSON.stringify({
                name, email, message
            })
        })
        console.log(res.status)
        if(res.status === 400 || !res){
            window.alert("Message Not Sent. Try again Later")
        }else{
            window.alert("Message Sent Succsfully ");
            setMsg({
                name:"",
                email:"",
                message:""
            })
        }
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div>
        <section id="contact">
            <div className="container my-5 py-5">
                <div className="row mb-5">
                    <div className="col-12">
                    <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                        <h1 className="display-6 text-center mb-4">Have Some <b>Questions?</b></h1>
                        <hr className='w-25 mx-auto'/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <iframe class="position-relative rounded w-100 h-100"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.663044543156!2d80.62001967485068!3d16.441930829353264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f0a2a7d81943%3A0x8ba5d78f65df94b8!2sK%20L%20Deemed%20To%20Be%20University!5e0!3m2!1sen!2sin!4v1700194315511!5m2!1sen!2sin" 
                        frameborder="0" styles="min-height: 300px; border:0;" allowfullscreen="" aria-hidden="false"
                        tabindex="0"></iframe>
                        </div>
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit} method='POST'>
                              <div class="mb-3">
                                  <label for="Name" class="form-label">Your Name</label>
                                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Jhon Doe" name='name' value={msg.name} onChange={handleChange}/>
                              </div>
                              <div class="mb-3">
                                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='email' value={msg.email} onChange={handleChange}/>
                              </div>
                              <div class="mb-3">
                                  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='Write your message here...' name='message' value={msg.message} onChange={handleChange}></textarea>
                              </div>
                              <button type='submit' className='btn btn-outline-primary'>Send Message <i className="fa fa-paper-plane ms-2"></i> </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact;