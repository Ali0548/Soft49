import React from 'react'
import Navbar from '../../components/front/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../../components/front/Footer'

const AllContractors = () => {
    return (
        <>
            <Navbar />
            <div class="container-fluid bg-primary py-5 mb-5">
                <div class="container py-5">
                    <div class="row align-items-center py-4">
                        <div class="col-md-6 text-center text-md-left">
                            <h1 class="display-4 mb-4 mb-md-0 text-secondary text-uppercase">Contractors</h1>
                        </div>
                        <div class="col-md-6 text-center text-md-right">
                            <div class="d-inline-flex align-items-center">
                                <Link class="btn btn-sm btn-outline-light" to={'/'}>Home</Link>
                                <i class="fas fa-angle-double-right text-light mx-2"></i>
                                <a class="btn btn-sm btn-outline-light disabled" href="">Contractors</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="container-fluid ">
            <div className="container py-4">
                
                <div className="row">

                    <div className="team col-lg-4 mt-4  d-flex flex-column text-center rounded overflow-hidden">
                        <div className="position-relative">
                            <div className="tea-img">
                                <img className="img-fluid w-100" src="img/team-1.jpg" alt="" />
                            </div>

                        </div>
                        <div className="d-flex flex-column bg-primary text-center py-4">
                            <Link to={'/contractor/khan'}><h5 className="font-weight-bold">Mr Khan</h5></Link>
                            
                        </div>
                    </div>
                    <div className="team col-lg-4 mt-4 d-flex flex-column text-center rounded overflow-hidden">
                        <div className="position-relative">
                            <div className="tea-img">
                                <img className="img-fluid w-100" src="img/team-2.jpg" alt="" />
                            </div>

                        </div>
                        <div className="d-flex flex-column bg-primary text-center py-4">
                            <Link to={'/contractor/khan'}><h5 className="font-weight-bold">Mr Khan</h5></Link>
                            
                        </div>
                    </div>
                    <div className="team col-lg-4 mt-4 d-flex flex-column text-center rounded overflow-hidden">
                        <div className="position-relative">
                            <div className="tea-img">
                                <img className="img-fluid w-100" src="img/team-3.jpg" alt="" />
                            </div>

                        </div>
                        <div className="d-flex flex-column bg-primary text-center py-4">
                        <Link to={'/contractor/khan'}><h5 className="font-weight-bold">Mr Khan</h5></Link>
                            
                        </div>
                    </div>
                    <div className="team col-lg-4 mt-4  d-flex flex-column text-center rounded overflow-hidden">
                        <div className="position-relative">
                            <div className="tea-img">
                                <img className="img-fluid w-100" src="img/team-1.jpg" alt="" />
                            </div>

                        </div>
                        <div className="d-flex flex-column bg-primary text-center py-4">
                            <Link to={'/contractor/khan'}><h5 className="font-weight-bold">Mr Khan</h5></Link>
                            
                        </div>
                    </div>
                    <div className="team col-lg-4 mt-4 d-flex flex-column text-center rounded overflow-hidden">
                        <div className="position-relative">
                            <div className="tea-img">
                                <img className="img-fluid w-100" src="img/team-2.jpg" alt="" />
                            </div>

                        </div>
                        <div className="d-flex flex-column bg-primary text-center py-4">
                            <Link to={'/contractor/khan'}><h5 className="font-weight-bold">Mr Khan</h5></Link>
                            
                        </div>
                    </div>
                    <div className="team col-lg-4 mt-4 d-flex flex-column text-center rounded overflow-hidden">
                        <div className="position-relative">
                            <div className="tea-img">
                                <img className="img-fluid w-100" src="img/team-3.jpg" alt="" />
                            </div>

                        </div>
                        <div className="d-flex flex-column bg-primary text-center py-4">
                        <Link to={'/contractor/khan'}><h5 className="font-weight-bold">Mr Khan</h5></Link>
                            
                        </div>
                    </div>


                </div>
            </div>
        </div>

            <Footer />
        </>
    )
}

export default AllContractors