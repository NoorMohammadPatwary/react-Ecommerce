import React, {  } from 'react'
import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from 'react-icons/bs';
import { RiMenuAddLine } from 'react-icons/ri';
import { useProductContext } from '../Context/AppContext';


function Navbar() {
    const {CompanyName}=useProductContext();

  
  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
        <Link className="navbar-brand ms-auto" >{CompanyName}</Link>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"> <RiMenuAddLine/></button>

        <div className="collapse navbar-collapse " id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0 ">
                <li className="nav-item">
                    <Link className="nav-link active"  aria-current="page" to={"/"}> Home <span className="visually-hidden">(current)</span></Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to={"/About"} >About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/All_Products/:id"} >All_Products</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/Products/:id"} >Products</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/Contact"} >Contact</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/Cart"} ><BsFillCartPlusFill className=' fa-2x fa-2xl'/></Link>
            </li>
                
                
                
            </ul>
           
            

            
        </div>
    </nav>
    {/* <form className="d-flex my-2 my-lg-0">
                <input className="form-control me-sm-2" type="text" placeholder="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
    
    </>
  )
}

export default Navbar