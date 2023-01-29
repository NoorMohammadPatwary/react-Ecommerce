import React from 'react'
import { NavLink } from 'react-router-dom'

export const PageNavigation = ({title}) => {
  return (
    <>
    <h6><NavLink to={"/"}> Home</NavLink> /{title}</h6></>
  )
}
