import React from 'react'
import Navbar from '../../components/front/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../../components/front/Footer'

const ProjectDetails = () => {
    return (
        <>
            <Navbar />
            <div class="container-fluid bg-primary py-5 mb-5">
                <div class="container py-5">
                    <div class="row align-items-center py-4">
                        <div class="col-md-6 text-center text-md-left">
                            <h1 class="display-4 mb-4 mb-md-0 text-secondary text-uppercase">Project Details</h1>
                        </div>
                        <div class="col-md-6 text-center text-md-right">
                            <div class="d-inline-flex align-items-center">
                                <Link class="btn btn-sm btn-outline-light" to={'/'}>Home</Link>
                                <i class="fas fa-angle-double-right text-light mx-2"></i>
                                <a class="btn btn-sm btn-outline-light disabled" href="">Project Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" >
                <div className="row">
                    <div className="col-lg-12">
                        <video style={{ width: '100%' }} autoPlay controls loop src="vd.mp4"></video>

                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-lg-4 " >
                        <div className="card bg-light p-4 bids" style={{ height: '250px' }}>
                            <div className="card-heade">
                                <img style={{ width: '100%' }} src="https://thumbs.dreamstime.com/b/luxury-home-bedroom-comfortable-stylish-decor-30716135.jpg" alt="" />

                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 " >
                        <div className="card bg-light p-4 bids" style={{ height: '250px' }}>
                            <div className="card-heade">
                                <img style={{ width: '100%' }} src="https://media.gettyimages.com/photos/modern-elegant-kitchen-stock-photo-picture-id1297586166?s=612x612" alt="" />

                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 " >
                        <div className="card bg-light p-4 bids" style={{ height: '250px' }}>
                            <div className="card-heade">
                                <img style={{ width: '100%' }} src="https://media.gettyimages.com/photos/modern-elegant-kitchen-stock-photo-picture-id1297586166?s=612x612" alt="" />

                            </div>

                        </div>
                    </div>
                </div>

                <p className='text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magni incidunt et voluptatem? Nobis atque ex blanditiis doloribus quia eligendi harum, dolorum, impedit excepturi accusamus error soluta, earum dolor aperiam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magni incidunt et voluptatem? Nobis atque ex blanditiis doloribus quia eligendi harum, dolorum, impedit excepturi accusamus error soluta, earum dolor aperiam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magni incidunt et voluptatem? Nobis atque ex blanditiis doloribus quia eligendi harum, dolorum, impedit excepturi accusamus error soluta, earum dolor aperiam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magni incidunt et voluptatem? Nobis atque ex blanditiis doloribus quia eligendi harum, dolorum, impedit excepturi accusamus error soluta, earum dolor aperiam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magni incidunt et voluptatem? Nobis atque ex blanditiis doloribus quia eligendi harum, dolorum, impedit excepturi accusamus error soluta, earum dolor aperiam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magni incidunt et voluptatem? Nobis atque ex blanditiis doloribus quia eligendi harum, dolorum, impedit excepturi accusamus error soluta, earum dolor aperiam.
                </p>
            </div>

            <Footer />
        </>
    )
}

export default ProjectDetails