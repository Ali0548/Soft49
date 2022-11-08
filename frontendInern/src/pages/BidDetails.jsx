import React from 'react'
import Navbar from '../components/front/Navbar'
import { Link } from 'react-router-dom'

const BidDetails = () => {
    return (
        <>
            <Navbar />
            <div className="container" style={{ marginTop: '100px' }}>

                <div className="card bg-light bidsd p-4 " style={{ height: '820px' }}>
                    <div className="card-heade  bid-details">
                        <img src="https://thumbs.dreamstime.com/b/luxury-home-bedroom-comfortable-stylish-decor-30716135.jpg" alt="" />

                    </div>
                    <div className="card-body text-dark">
                    <p style={{ fontSize: '30px', fontWeight: '500' }}><Link to={'/bid/Bedroom'}>Bedroom Details</Link></p>
                    <p><strong>Size:</strong> 12x12</p>
                    <p><strong>Attached Bathrooms:</strong> 2</p>

                    <p><strong>Description:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iste, sint veritatis dolorem sit perferendis voluptate iure officiis quod dicta magnam archi
                    tecto fuga cum facere deleniti ea, obcaecati deserunt eaque aliquam. lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Iste, sint veritatis dolorem sit perferendis voluptate iure officiis
                    quod dicta magnam architecto fuga cum facere deleniti ea, obcaecati deserunt eaque aliquam.</p>

                    <p><strong>Price Ranage:</strong> 10,000 PKR - 30,000 PKR</p>
                    <p><strong>Timeline:</strong> 10 days - 20 days</p>


                    </div>
                </div>

            </div>
        </>
    )
}

export default BidDetails