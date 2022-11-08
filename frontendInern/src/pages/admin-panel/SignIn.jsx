import React, { useState, useRef } from "react";
import Navbar from "../../components/front/Navbar";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignIn = () => {
  // Login Data States
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  // Useref for login button 
  const toggleSubmit = useRef(null);

  // Useref for Login Spinner
  const toggleSpinner = useRef(null);

  // Getting Credentials from admin
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // navigator
  const navigator = useNavigate();

  // Logining the admin
  const loginToSystem = async (e) => {
    e.preventDefault();
    toggleSubmit.current.disabled = true;
    toggleSpinner.current.style.display = "";
   try {
    const URL = "http://localhost:5000/api/admin-login"
    let response = await fetch(URL, {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
         },
         body:JSON.stringify(loginData)
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
      localStorage.setItem('admin_id', response.data[0].admin_id);
      localStorage.setItem('admin_soft49', response.data[0].admin_name);
      navigator('/admin/dashboard');
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
      <div className="container">
        <form className="p-5 rounded" onSubmit={loginToSystem}>
          <h3 className="text-dark">Admin Login</h3>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              onChange={handleChange}
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              className="form-control"
              required
            />
          </div>

          <button ref={toggleSubmit} type="submit" className="btn btn-primary">
            Login  <span ref={toggleSpinner} style={{display:"none"}} className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          </button>
        </form>
      </div>
    </>
  );
};

export default SignIn;
