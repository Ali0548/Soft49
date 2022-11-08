import React from 'react'
import Navbar from '../components/front/Navbar'

const Messenger = () => {
  return (
    <>
    <Navbar />

    <div className="container" style={{marginTop:'100px'}}>
      <div className="row p-1" style={{border:'1px solid gray', borderRadius:'10px'}}>
        <div className="col-lg-3 bg-light p-3" style={{height:'475px', overflow:'scroll', overflowX:'hidden'}}>
          <h5 style={{borderBottom:'1px solid gray'}}>Username</h5>
          <h5 style={{borderBottom:'1px solid gray'}}>Username</h5>
          <h5 style={{borderBottom:'1px solid gray'}}>Username</h5>
          <h5 style={{borderBottom:'1px solid gray'}}>Username</h5>
          <h5 style={{borderBottom:'1px solid gray'}}>Username</h5>
          <h5 style={{borderBottom:'1px solid gray'}}>Username</h5>
          <h5 style={{borderBottom:'1px solid gray'}}>Username</h5>
          <h5 style={{borderBottom:'1px solid gray'}}>Username</h5>
          <h5 style={{borderBottom:'1px solid gray'}}>Username</h5>
          <h5 style={{borderBottom:'1px solid gray'}}>Username</h5>
          <h5 style={{borderBottom:'1px solid gray'}}>Username</h5>
          <h5 style={{borderBottom:'1px solid gray'}}>Username</h5>
          <h5 style={{borderBottom:'1px solid gray'}}>Username</h5>
        </div>
        <div className="col-lg-9">
          <div className="div" style={{height:'430px', overflow:'scroll', overflowX:'hidden'}}>
          <p className='bg-light p-3 rounded my-3'> <strong>username: </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptates quos beatae obcaecati magni quod tempora nisi placeat labore, numquam est ex, ratione hic quis ipsum. Enim ut quia soluta.</p>
          <p className='bg-light p-3 rounded my-3'> <strong>username: </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptates quos beatae obcaecati magni quod tempora nisi placeat labore, numquam est ex, ratione hic quis ipsum. Enim ut quia soluta.</p>
          <p className='bg-light p-3 rounded my-3'> <strong>username: </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptates quos beatae obcaecati magni quod tempora nisi placeat labore, numquam est ex, ratione hic quis ipsum. Enim ut quia soluta.</p>
          <p className='bg-light p-3 rounded my-3'> <strong>username: </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptates quos beatae obcaecati magni quod tempora nisi placeat labore, numquam est ex, ratione hic quis ipsum. Enim ut quia soluta.</p>
          <p className='bg-light p-3 rounded my-3'> <strong>username: </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptates quos beatae obcaecati magni quod tempora nisi placeat labore, numquam est ex, ratione hic quis ipsum. Enim ut quia soluta.</p>
          <p className='bg-light p-3 rounded my-3'> <strong>username: </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptates quos beatae obcaecati magni quod tempora nisi placeat labore, numquam est ex, ratione hic quis ipsum. Enim ut quia soluta.</p>

          </div>
          
          <form action="" className='d-flex align-items-center'>
            <input name="" placeholder='Wtite your message...' className='form-control' />
            <button style={{height:'38px'}} className='btn btn-success'>Send</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Messenger