import React, { useState } from 'react'
import Navbar from '../components/front/Navbar'
import { Link } from 'react-router-dom'


const BecomeContractor = () => {

    const [image, setImage] = useState(null)

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          setImage(URL.createObjectURL(event.target.files[0]));
        }
    }
       

    return (
        <>
            <Navbar />
            <div className="container">
                <form className=" p-5 rounded">
                    <div className="row justify-content-center">

                        
                        <div class="mb-3 col-lg-4 col-12">
                            <label class=" btn-file" >
                                {image == null? 
                                <img className='pr' style={{width:'300px', height:'250px', objectFit:'cover', cursor:'pointer'}} src="p.png" alt="" />
                                :
                                <img className='pr' style={{width:'300px', height:'250px', objectFit:'cover', cursor:'pointer'}} src={image} alt="" />
                                }
                                <br />
                                <input type="file" onChange={onImageChange} style={{display: 'none'}} required />
                            </label>
                        </div>

                         <div class="mb-3 col-lg-4 col-12">
                            <label htmlFor="name" class="form-label">Designation</label>
                            <select name="" id="" className='form-control'>
                                <option value="">Choose Designation</option>
                                <option value="">Building Construction</option>
                                <option value="">Interior Designing</option>
                                <option value="">Exterior Designing</option>
                                <option value="">Map Approvals</option>
                                <option value="">Architecture Design</option>
                                <option value="">Renovation</option>
                                <option value="">Consultation</option>
                                <option value="">Maintanance</option>

                            </select>
                        </div> 
                    <button type="submit" class="col-lg-7 col-8 btn btn-primary btn-block">Save</button>
                    </div>
                  

                </form>
            </div>
        </>
    )
}

export default BecomeContractor