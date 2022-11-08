import React from 'react'
import { Link } from 'react-router-dom'

const Contractors = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row align-items-end mb-4">
                    <div className="col-lg-6">
                        <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Users Bids</h6>
                        <h1 className="section-title mb-3">Latest Bids</h1>
                    </div>

                </div>
                <div className="row">

                    <div className="team col-lg-4 mt-4  d-flex flex-column text-center rounded overflow-hidden">
                        <div className="position-relative">
                            <div className="tea-img">
                                <img className="img-fluid w-100" src="car.jpeg" alt="" />
                            </div>

                        </div>
                        <div className="d-flex flex-column bg-primary text-left px-3 py-4">
                            <h4>Car Parking</h4>
                            <p className='text-dark'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, dolore officiis...</p>
                            <Link to={'/bid/Kitchen'}><h5 className="font-weight-bold btn btn-success">View Details</h5></Link>

                        </div>
                    </div>
                    <div className="team col-lg-4 mt-4  d-flex flex-column text-center rounded overflow-hidden">
                        <div className="position-relative">
                            <div className="tea-img">
                                <img className="img-fluid w-100" src="kitchen.jpeg" alt="" />
                            </div>

                        </div>
                        <div className="d-flex flex-column bg-primary text-left px-3 py-4">
                            <h4>Kitchen</h4>
                            <p className='text-dark'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, dolore officiis...</p>
                            <Link to={'/bid/Kitchen'}><h5 className="font-weight-bold btn btn-success">View Details</h5></Link>

                        </div>
                    </div>
                    <div className="team col-lg-4 mt-4  d-flex flex-column text-center rounded overflow-hidden">
                        <div className="position-relative">
                            <div className="tea-img">
                                <img className="img-fluid w-100" src="bedroom.jpeg" alt="" />
                            </div>

                        </div>
                        <div className="d-flex flex-column bg-primary text-left px-3 py-4">
                            <h4>Bedroom</h4>
                            <p className='text-dark'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, dolore officiis...</p>
                            <Link to={'/bid/Kitchen'}><h5 className="font-weight-bold btn btn-success">View Details</h5></Link>

                        </div>
                    </div>
                    


                </div>
            </div>
        </div>
    )
}

export default Contractors