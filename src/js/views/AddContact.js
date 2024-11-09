import React from 'react'
import { Link } from 'react-router-dom'

export const AddContact = () => {
  return (
    <form className='w-50 m-auto'>
      <h2 className='text-center'>Add a new contact</h2>
      <div className="mb-3">
        <label htmlFor="exampleInputFullName" className="form-label">Full Name</label>
        <input type="text" className="form-control" id="exampleInputFullName" aria-describedby="fullNameHelp" placeholder='Full Name'/> 
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
        <input type="text" className="form-control" id="exampleInputPhone" placeholder='Enter phone'/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputAddress" className="form-label">Address</label>
        <input type="text" className="form-control" id="exampleInputPhone" placeholder='Enter address'/>
      </div>      
      <button type="submit" className="btn btn-primary w-100 mb-3">Save</button>
      <div>
        <Link to="../contact">or get back to contacts</Link>
      </div>
    </form>
  )
}
