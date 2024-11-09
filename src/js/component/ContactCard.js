import React from 'react'
import rigo from "../../img/rigo-baby.jpg";

export const ContactCard = ({ contact }) => {
  const {
    name,
    phone,
    email,
    address,
    id
  } = contact

  return (
    <div className='card'>
      <div className='row'>
        <figure className='col-3 d-flex justify-content-center align-items-center m-0'>
          <img src={rigo} className="img-fluid rounded-circle w-50" alt="..."/>
        </figure>
        <div className='col-6 card-body'>
          <h3 className='card-title'>{name}</h3>
          
          <ul className="list-unstyled">
            <li>
              <i className="fas fa-map-marker-alt"></i> {address}
            </li>
            <li>
              <i className="fas fa-phone"></i> {phone}
            </li>
            <li>
              <i className="fas fa-envelope"></i> {email}
            </li>
          </ul>
        </div>
        <div className="col-3 d-flex justify-content-end align-items-start p-5 fs-5">
          <button className="bg-transparent border border-0 mx-2">
            <i className="fas fa-pencil-alt"></i> 
          </button>
          <button className="bg-transparent border border-0 mx-2">
            <i className="fas fa-trash-alt"></i> 
          </button>
        </div>
      </div>
    </div>
  )
}
