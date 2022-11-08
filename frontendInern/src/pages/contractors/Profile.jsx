import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/front/Footer'
import Navbar from '../../components/front/Navbar'

const Profile = () => {

    const [image1, setImage1] = useState(null)
    const [image2, setImage2] = useState(null)
    const [image3, setImage3] = useState(null)
    const [video, setVideo] = useState(null)

    const onImage1Change = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage1(URL.createObjectURL(event.target.files[0]));
        }
    }
    const onImage2Change = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage2(URL.createObjectURL(event.target.files[0]));
        }
    }
    const onImage3Change = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage3(URL.createObjectURL(event.target.files[0]));
        }
    }
    const onVideoChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setVideo(URL.createObjectURL(event.target.files[0]));
        }
    }

    return (
        <>
            <Navbar />

            <div className='container'>
                <div className="d-flex align-items-center p-3 bg-primary">
                    <div className="col-lg-3 col-3">
                        <img style={{ borderRadius: '50%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnqeZDBa0fx2_3cHpIlB9mnIlBBF2Zqoa5-JiGbbncZw4KWhlOTtXJ6TdVRznzcjonInU&usqp=CAU" alt="" />
                    </div>
                    <div className="col-lg-9 col-9">
                        <h5 className='text-dark'>Contractor Name
                            <button data-toggle="modal" data-target="#exampleModal" className='btn btn-secondary ml-4'>Add Project</button></h5>

                    </div>
                </div>






                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Project Details</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form action="">
                                    <label htmlFor="">Select Three Images of the Project:</label>
                                    <div className='row justify-content-center'>
                                        <label class=" btn-file" >
                                            {image1 == null ?
                                                <img className='mx-2' style={{ height: '90px', cursor: 'pointer' }} src="https://media.istockphoto.com/vectors/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-vector-id1128826884?k=20&m=1128826884&s=170667a&w=0&h=_cx7HW9R4Uc_OLLxg2PcRXno4KERpYLi5vCz-NEyhi0=" alt="" />
                                                :
                                                <img className='mx-4' style={{ height: '90px', width: '90px', objectFit: 'cover', cursor: 'pointer' }} src={image1} alt="" />
                                            }
                                            <input type="file" onChange={onImage1Change} style={{ display: 'none' }} name="" className='form-conrol mb-3' id="" />
                                            <br /> Image 1
                                        </label>
                                        <label class=" btn-file" >
                                            {image2 == null ?
                                                <img className='mx-2' style={{ height: '90px', cursor: 'pointer' }} src="https://media.istockphoto.com/vectors/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-vector-id1128826884?k=20&m=1128826884&s=170667a&w=0&h=_cx7HW9R4Uc_OLLxg2PcRXno4KERpYLi5vCz-NEyhi0=" alt="" />
                                                :
                                                <img className='mx-4' style={{ height: '90px', width: '90px', objectFit: 'cover', cursor: 'pointer' }} src={image2} alt="" />
                                            }
                                            <input type="file" onChange={onImage2Change} style={{ display: 'none' }} name="" className='form-conrol mb-3' id="" />
                                            <br /> Image 2
                                        </label>
                                        <label class=" btn-file" >
                                            {image3 == null ?
                                                <img className='mx-2' style={{ height: '90px', cursor: 'pointer' }} src="https://media.istockphoto.com/vectors/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-vector-id1128826884?k=20&m=1128826884&s=170667a&w=0&h=_cx7HW9R4Uc_OLLxg2PcRXno4KERpYLi5vCz-NEyhi0=" alt="" />
                                                :
                                                <img className='mx-4' style={{ height: '90px', width: '90px', objectFit: 'cover', cursor: 'pointer' }} src={image3} alt="" />
                                            }
                                            <input type="file" onChange={onImage3Change} style={{ display: 'none' }} name="" className='form-conrol mb-3' id="" />
                                            <br /> Image 3
                                        </label>

                                    </div>
                                    <label htmlFor="" className='mt-4'>Select a video of the Project:</label>
                                    <div className="row justify-content-center">
                                        <label class=" btn-file" >
                                            {video == null ?
                                                <img className='mx-2' style={{ height: '90px', cursor: 'pointer' }} src="https://media.istockphoto.com/vectors/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-vector-id1128826884?k=20&m=1128826884&s=170667a&w=0&h=_cx7HW9R4Uc_OLLxg2PcRXno4KERpYLi5vCz-NEyhi0=" alt="" />
                                                :
                                                <video style={{ height: '200px', width: '100%' }} autoPlay controls loop src={video}></video>
                                            }
                                            <input type="file" onChange={onVideoChange} style={{ display: 'none' }} name="" className='form-conrol mb-3' id="" />
                                          
                                        </label>
                                    </div>
                                    <br />
                                    <label htmlFor="" className=''>Description:</label>
                                    <textarea name="" className='form-control ' rows={1} placeholder='desccribe your work'></textarea>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="row mt-2  py-3">
                    
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-white">
                            <div className="card-heade">
                                <img style={{ width: '100%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxLghidKLgacmp8ZuWeyu70801C4was1nEg&usqp=CAU" alt="" />

                            </div>
                            <div className="card-body text-dark">
                                
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eius aliquid amet. Facere expedita, beatae, iste assumenda delectus laboriosam ex quod tempora cumque, numquam deserunt dolores animi ut ad ipsam.</p>
                                <Link to={'/project-details'}>Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-white">
                            <div className="card-heade">
                                <img style={{ width: '100%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxLghidKLgacmp8ZuWeyu70801C4was1nEg&usqp=CAU" alt="" />

                            </div>
                            <div className="card-body text-dark">
                                
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eius aliquid amet. Facere expedita, beatae, iste assumenda delectus laboriosam ex quod tempora cumque, numquam deserunt dolores animi ut ad ipsam.</p>
                                <Link to={'/project-details'}>Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-white">
                            <div className="card-heade">
                                <img style={{ width: '100%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxLghidKLgacmp8ZuWeyu70801C4was1nEg&usqp=CAU" alt="" />

                            </div>
                            <div className="card-body text-dark">
                                
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eius aliquid amet. Facere expedita, beatae, iste assumenda delectus laboriosam ex quod tempora cumque, numquam deserunt dolores animi ut ad ipsam.</p>
                                <Link to={'/project-details'}>Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-white">
                            <div className="card-heade">
                                <img style={{ width: '100%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxLghidKLgacmp8ZuWeyu70801C4was1nEg&usqp=CAU" alt="" />

                            </div>
                            <div className="card-body text-dark">
                                
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eius aliquid amet. Facere expedita, beatae, iste assumenda delectus laboriosam ex quod tempora cumque, numquam deserunt dolores animi ut ad ipsam.</p>
                                <Link to={'/project-details'}>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default Profile