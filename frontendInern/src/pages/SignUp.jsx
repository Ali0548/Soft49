import React,{useState,useRef} from 'react'
import Navbar from '../components/front/Navbar'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
const SignUp = () => {
// Useref for login button 
const toggleSubmit = useRef(null);

// Useref for Login Spinner
const toggleSpinner = useRef(null);
    // Login Data States
  const [signUpData, setsignUpData] = useState({ user_name: "", last_name: "", user_email:"", user_contact:"", user_password:"" });

  const handleChange = (e)=>{
    setsignUpData({...signUpData, [e.target.name]:e.target.value});
  }
    const signUpToSystem = async (e) => {
        e.preventDefault();
        toggleSubmit.current.disabled = true;
        toggleSpinner.current.style.display = "";
       try {
        const URL = "http://localhost:5000/api/signup"
        let response = await fetch(URL, {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
             },
             body:JSON.stringify(signUpData)
        });
        response = await response.json();
        toggleSubmit.current.disabled = false
        toggleSpinner.current.style.display = "none";
        console.log(response);
        if(response.status===false){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            html: `<strong>${response.res}</strong>`,
           });
        }
        else if(response.status===true){
          Swal.fire({
            icon: 'success',
            title: 'Succcess',
            html: `<strong>User has been registered</strong>`,
           });
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            html: `<strong>Something Went Wrong</strong>`,
           });
        }
       } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          html: `<strong>Something Went Wrong</strong>`,
         });
       }
      };
    return (
        <>
            <Navbar />
            <div className="container">
                <form className=" p-5 rounded" onSubmit={signUpToSystem}>
                    <div className="row">

                        <div class="mb-3 col-lg-6 col-12">
                            <label htmlFor="name" class="form-label">First Name</label>
                            <input type="text" onChange={handleChange} name="user_name" placeholder='First Name' required class="form-control" />
                        </div>
                        <div class="mb-3 col-lg-6 col-12">
                            <label htmlFor="name" class="form-label">Last Name</label>
                            <input type="text" onChange={handleChange} name="last_name" placeholder='Last Name' required class="form-control" />
                        </div>
                    </div>
                    <div className="row">

                        <div class="mb-3 col-lg-6 col-12">
                            <label htmlFor="name" class="form-label">Email</label>
                            <input type="email" onChange={handleChange} name="user_email" placeholder='Email' required class="form-control" />
                        </div>
                        <div class="mb-3 col-lg-6 col-12">
                            <label htmlFor="name" class="form-label">Phone</label>
                            <input type="number" onChange={handleChange} name="user_contact" placeholder='Phone' required class="form-control" />
                        </div>
                    </div>
                    <div className="row">

                        <div class="mb-3 col-lg-6 col-12">
                            <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" onChange={handleChange}  name="user_password" placeholder='Password'required  class="form-control" id="exampleInputPassword1" />
                        </div>
                        {/* <div class="mb-3 col-lg-6 col-12">
                            <label htmlFor="exampleInputPassword1" class="form-label">Confirm Password</label>
                            <input type="password" onChange={handleClick} placeholder='Confirm Password' class="form-control" id="exampleInputPassword1" />
                        </div> */}
                    </div>
                    <div class="mb-3">
                    </div>

                    <button ref={toggleSubmit} type="submit" class="btn btn-primary">Sign Up  <span ref={toggleSpinner} style={{display:"none"}} className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button>
                    <span> Already have an acount?</span> <Link to={'/sign-in'}>Sign In</Link>
                </form>
            </div>
        </>
    )
}

export default SignUp