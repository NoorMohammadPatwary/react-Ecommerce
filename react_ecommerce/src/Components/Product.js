/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useFilterContext } from '../Context/FilterContext'
import FormatPrice from './FormatPrice'


export default function Product(currentElement) {
  const {id,name,image,category,colors,company,description,featured,price}=currentElement
    
  return (
    <>
    <NavLink to={`/Products/${id}`}>
      <figure className={`card w-25  m-sm-5 m-md-3 m-lg-1`}>
        <img src={image} alt="" srcset=""  style={{width: "15rem" }} />
        <div className=' d-flex align-items-center justify-content-between'>
         <h6 className=' text-decoration-none'> {name} /</h6>
         <h6> {<FormatPrice price={price}/>}</h6>
         
        
        </div>
      </figure>
    </NavLink>
    
    
   
    
    </>
  )
}
