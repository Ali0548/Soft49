import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (


    <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 bg-secondary d-none d-lg-block">
                    <a href="" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                        <h1 style={{fontSize:'40px'}} className="m-0 display-3 text-primary">Contractor.in</h1>
                    </a>
                </div>
                <div className="col-lg-9 bg-light">
                    <div className="row bg-dark d-none d-lg-flex">
                        <div className="col-lg-7 text-left text-white">
                            <div className="h-100 d-inline-flex align-items-center border-right border-primary py-2 px-3">
                                <i className="fa fa-envelope text-primary mr-2"></i>
                                <small>info@example.com</small>
                            </div>
                            <div className="h-100 d-inline-flex align-items-center py-2 px-2">
                                <i className="fa fa-phone-alt text-primary mr-2"></i>
                                <small>+92 300 000 0000</small>
                            </div>
                        </div>
                        <div className="col-lg-5 text-right">
                            <div className="d-inline-flex align-items-center pr-2">
                                <a className="text-primary p-2" href="">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="text-primary p-2" href="">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="text-primary p-2" href="">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a className="text-primary p-2" href="">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a className="text-primary p-2" href="">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg  navbar-light p-0">
                        <a href="" className="navbar-brand d-block d-lg-none">
                            <h1 style={{fontSize:'24x'}} className="m-0 display-4 text-primary">Contractor.in</h1>
                        </a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto py-0">
                                <Link to={'/'} className="nav-item nav-link ">Home</Link>
                                <Link to={'/bids'} className="nav-item nav-link ">Bids</Link>
                               
                                <Link to={'/contractors'} className="nav-item nav-link">Contractors</Link>
                                <Link to={'/post-bid'} className="nav-item nav-link ">Post Bid</Link>
                                <Link to={'/messenger'} className="nav-item nav-link ">Messenger</Link>
                              
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <Link to={'/admin/login'} className="nav-item nav-link ">Admin Login</Link>
                                        <Link to={'/become-contractor'} className="nav-item nav-link ">Become Contractor</Link>
                                        
                                    </div>
                                </div>
                            </div>
                            <Link to={'/sign-up'} className="btn btn-primary mr-2 d-lg-block">Register</Link>
                            <Link to={'/sign-in'} className="btn btn-primary mr-2 d-lg-block">Login</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </div>


  
  )
}

export default Navbar