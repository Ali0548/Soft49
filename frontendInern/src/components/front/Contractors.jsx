import React from 'react'
import { Link } from 'react-router-dom'

const Contractors = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row align-items-end mb-4">
                    <div className="col-lg-6">
                        <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Contractors</h6>
                        <h1 className="section-title mb-3">Meet Our Experienced Contractors</h1>
                    </div>
                   
                </div>
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


                </div>
            </div>
        </div>
    )
}

export default Contractors