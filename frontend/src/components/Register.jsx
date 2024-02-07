import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const history = useNavigate();
    const [user, setUser] = useState({
        username:"",
        email:"",
        password:""
    }); 

    //Handle Inputs
    const handleInput = (event) =>{
        let name = event.target.name;
        let value = event.target.value;

        setUser({...user, [name]:value});   
    }

 //Handle Submitted
const handleSubmit = async (event)=>{
    event.preventDefault();
    const {username, id, domain, email, password} = user;
    try {
        const res = await fetch('/register', {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body :JSON.stringify({
                username, id, domain, email, password
            })
        })
        if(res.status === 400 || !res){
            window.alert("Already Used details")
        }else{
            window.alert("Registered Successfully");
            history.push("/login")
        }
    } catch (error) {
        console.log(error);
    }
}
    
  return (
    <div>
          <div className="container shadow-sm my-5" >
            <div className="row">
               <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2">
                    <h1 className="display-4 fw-bolder">Hello Welcome</h1>
                        <p className="lead text-center">Enter Your Details To Join Us</p>
                        <i className=' fa-5x mb-4 text-white'><i className='fa fa-pencil'></i></i>   
                </div> 
                <div className="col-md-6">
                    <h1 className="display-6 fw-bolder mb-5">Register</h1>
                      <form onSubmit={handleSubmit} method='POST' >
                      <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label">Username</label>
                              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Username' name='username' value={user.username} onChange={handleInput} />
                              
                          </div>
                          <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label">ID Number</label>
                              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Id' name='id' value={user.id} onChange={handleInput} />
                              
                          </div>
                          <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label">Enter Intrested Domain</label>
                              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Technical or Non Technical' name='domain' value={user.domain} onChange={handleInput} />
                              
                          </div>
                          <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label">Email address</label>
                              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email' name='email' value={user.email} onChange={handleInput} />
                              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                          </div>
                          <div class="mb-3">
                              <label for="exampleInputPassword1" class="form-label">Password</label>
                              <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' name='password' value={user.password} onChange={handleInput} />
                          </div>
                          <div class="mb-3 form-check black">
                              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                              <label class="form-check-label" for="exampleCheck1">I Agree Terms & conditions</label>
                          </div>
                          <button type="submit" class="btn btn-primary">Register</button>
                      </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register;