import React, { useState } from 'react'
import Navbar from '../components/front/Navbar'
import { Link } from 'react-router-dom'

const PostBid = () => {



    const kitchen = (e) => {

        let choosen = document.getElementById('l').value;
        if (choosen === 'baths' || choosen == 'tv') {
            document.getElementById('bathslb').style.display = "block"
            document.getElementById('baths').style.display = "block"
            document.getElementById('typelb').style.display = "none"
            document.getElementById('type').style.display = "none"
            document.getElementById('sizelb').style.display = "block"
            document.getElementById('size').style.display = "block"
            document.getElementById('carlb').style.display = "none"
            document.getElementById('car').style.display = "none"
            document.getElementById('t').className = "col-lg-6"
            document.getElementById('material').style.display = "none"
        } else if (choosen === 'kitchen' || choosen === 'washroom') {
            document.getElementById('typelb').style.display = "block"
            document.getElementById('type').style.display = "block"
            document.getElementById('bathslb').style.display = "none"
            document.getElementById('baths').style.display = "none"
            document.getElementById('sizelb').style.display = "block"
            document.getElementById('size').style.display = "block"
            document.getElementById('carlb').style.display = "none"
            document.getElementById('car').style.display = "none"
            document.getElementById('t').className = "col-lg-6"
            document.getElementById('material').style.display = "none"

        } else if (choosen === 'car') {
            document.getElementById('typelb').style.display = "block"
            document.getElementById('type').style.display = "block"
            document.getElementById('bathslb').style.display = "none"
            document.getElementById('baths').style.display = "none"
            document.getElementById('sizelb').style.display = "none"
            document.getElementById('size').style.display = "none"
            document.getElementById('carlb').style.display = "block"
            document.getElementById('car').style.display = "block"
            document.getElementById('t').className = "col-lg-6"
            document.getElementById('material').style.display = "none"
        } else if (choosen === 'floor' || choosen === 'drowroom') {


            document.getElementById('material').style.display = "block"
            document.getElementById('t').className = "col-lg-3"
            document.getElementById('typelb').style.display = "block"
            document.getElementById('type').style.display = "block"
            document.getElementById('bathslb').style.display = "none"
            document.getElementById('baths').style.display = "none"
            document.getElementById('sizelb').style.display = "block"
            document.getElementById('size').style.display = "block"
            document.getElementById('carlb').style.display = "none"
            document.getElementById('car').style.display = "none"
        }

        // alert(a)
    }
    return (
        <>
            <Navbar />
            <div className="container">
                <form className="p-5">
                    <h3>Post Bid</h3>
                    <div className="row">

                        <div class="mb-3 col-lg-6 col-12">
                            <label htmlFor="name" class="form-label">Category</label>
                            <select name="" id="l" onChange={kitchen} class="form-control">
                                <option value="">Choose Category</option>
                                <option value="baths">Bedroom</option>
                                <option value="kitchen">Kitchen</option>
                                <option value="washroom">Washroom</option>
                                <option value="tv">TV Longue</option>
                                <option value="car">Car Parking</option>
                                <option value="floor">Floor</option>
                                <option value="drowroom">Drowroom</option>
                            </select>
                        </div>
                        <div class="mb-3 col-lg-3 col-12">
                            <label htmlFor="name" class="form-label" id='sizelb'>Size</label>
                            <input type="text" placeholder="size" id='size' class="form-control" />
                            <label htmlFor="name" class="form-label" id='carlb' style={{ display: 'none' }} >Area</label>
                            <input type="text" placeholder="Area" id='car' style={{ display: 'none' }} class="form-control" />
                        </div>
                        <div class="mb-3 col-lg-3 col-12" >
                            <label htmlFor="name" class="form-label" id='bathslb'>No. of Bathrooms</label>
                            <input type="text" placeholder='Number of Bathrooms' id='baths' class="form-control" />
                            <label htmlFor="name" class="form-label" id='typelb' style={{ display: 'none' }}>Type/Style</label>
                            <input type="text" placeholder='Type/Style' id='type' className="form-control" style={{ display: 'none' }} />
                        </div>
                    </div>
                    <div className="row">

                        <div class="mb-3 col-lg-3 col-12">
                            <label htmlFor="name" class="form-label">Price Starting</label>
                            <input type="text" placeholder='Price Starting' class="form-control" />
                        </div>
                        <div class="mb-3 col-lg-3 col-12">
                            <label htmlFor="name" class="form-label">Price Ending</label>
                            <input type="text" placeholder='Price Ending' class="form-control" />
                        </div>
                        <div id='t' class="mb-3 ">
                            <label htmlFor="name" class="form-label">Timeline</label>
                            <input type="text" placeholder='Timeline' class="form-control" />
                            
                        </div>
                        <div id='material' class="mb-3 col-lg-3" style={{display:'none'}}>
                            <label htmlFor="name" class="form-label">Material</label>
                            <input type="text" placeholder='Material' class="form-control" />
                            
                        </div>
                    </div>
                    <div className="row">
                        <div class="mb-3 col-lg-12 col-12">
                            <label htmlFor="name" class="form-label">Description</label>
                            <textarea name="" className='form-control' placeholder='Description'></textarea>
                        </div>
                    </div>
                    <div class="mb-3">
                    </div>

                    <button type="submit" class="btn btn-primary">Post</button>

                </form>
            </div>
        </>
    )
}

export default PostBid