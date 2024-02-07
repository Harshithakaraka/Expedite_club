import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {

    const[user, setUser] = useState({
        email : "",
        password :""
    });
//
const handleInput = (event) =>{
    let name = event.target.name
    let value = event.target.value
    setUser({...user, [name]:value})
}
//
const handleSubmit = async (event) =>{
    event.preventDefault();
    const {email, password} = user;
    try {
        const res = await fetch('/login',{
            method : "POST",
            headers : {
                "Content-type": "application/json"
            },
            body : JSON.stringify({
                email,password
            })
        });
        if(res.status === 400 || !res)
        {
            window.alert("Invalid Credentials")
        }
        else{
            window.alert("Login Successfull");
            window.location.reload();
        }
    } catch (error) {
        console.log(error)
    }
}
  return (
    <div>
        <div className="container shadow-sm my-5" >
            <div className="row justify-content-end">
               <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
                    <h1 className="display-4 fw-bolder">Welcome Back..</h1>
                        <p className="lead text-center">Enter Your Credentials To Login...</p>
                        <h5 className='mb-4'>OR</h5>
                        <NavLink to="/login" className="btn btn-outline-light me-4 rounded-pill px-4 py-2 w-50">Login</NavLink>
                </div> 
                <div className="col-md-6">
                    <h1 className="display-6 fw-bolder mb-5">Login</h1>
                      <form onSubmit={handleSubmit} >
                          <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label">Email address</label>
                              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email' name='email' value={user.email} onChange={handleInput} />
                              
                          </div>
                          <div class="mb-3">
                              <label for="exampleInputPassword1" class="form-label">Password</label>
                              <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' name='password' value={user.password} onChange={handleInput}/>
                          </div>
                          <div class="mb-3 form-check black">
                              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                              <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                          </div>
                          <button type="submit" class="btn btn-primary">Login</button>
                      </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login;