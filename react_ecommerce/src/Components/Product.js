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
      <figure className={``}>
        <img src={image} alt="" srcset=""  style={{width: "15rem" }} />
        <div className=' d-flex align-items-center '>
         <h6 className=' text-decoration-none'> {name} / / / / </h6>
         <h6> {<FormatPrice price={price}/>}</h6>
         
        
        </div>
      </figure>
    </NavLink>
    
    
   
    
    </>
  )
}
