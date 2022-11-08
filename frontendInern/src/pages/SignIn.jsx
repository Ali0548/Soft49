import React from 'react'
import Navbar from '../components/front/Navbar'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <>
    <Navbar />
    <div className="container">
        <form className="p-5 rounded">
            <div class="mb-3">
                <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" placeholder='Email' class="form-control" />
            </div>
            <div class="mb-3">
                <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" placeholder='Password' class="form-control" id="exampleInputPassword1" />
            </div>

            <button type="submit" class="btn btn-primary">Login</button>
            <span> Don't have an acount?</span> <Link to={'/sign-up'}>Sign Up</Link>
        </form>
    </div>
    </>
  )
}

export default SignIn