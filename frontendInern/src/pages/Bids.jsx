import React from 'react'
import Navbar from '../components/front/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/front/Footer'

const Bids = () => {
    return (
        <>
            <Navbar />
            <div class="container-fluid bg-primary py-5 mb-5">
                <div class="container py-5">
                    <div class="row align-items-center py-4">
                        <div class="col-md-6 text-center text-md-left">
                            <h1 class="display-4 mb-4 mb-md-0 text-secondary text-uppercase">Bids</h1>
                        </div>
                        <div class="col-md-6 text-center text-md-right">
                            <div class="d-inline-flex align-items-center">
                                <Link class="btn btn-sm btn-outline-light" to={'/'}>Home</Link>
                                <i class="fas fa-angle-double-right text-light mx-2"></i>
                                <a class="btn btn-sm btn-outline-light disabled" href="">Bids</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" >
                <div className="row">
                    <div className="col-lg-6 " >
                        <div className="card bg-light p-4 bids" style={{ height: '400px' }}>
                            <div className="card-heade">
                                <img style={{ width: '100%' }} src="https://thumbs.dreamstime.com/b/luxury-home-bedroom-comfortable-stylish-decor-30716135.jpg" alt="" />

                            </div>
                            <div className="card-body text-dark">
                                <p style={{ fontSize: '30px', marginTop: '-20px' }}><Link to={'/bid/Bedroom'}>Bedroom</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 " >
                        <div className="card bg-light p-4 bids" style={{ height: '400px' }}>
                            <div className="card-heade">
                                <img style={{ width: '100%' }} src="https://media.gettyimages.com/photos/modern-elegant-kitchen-stock-photo-picture-id1297586166?s=612x612" alt="" />

                            </div>
                            <div className="card-body text-dark">
                                <p style={{ fontSize: '30px', marginTop: '-20px' }}><Link to={'/bid/Kitchen'}>Kitchen</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Bids