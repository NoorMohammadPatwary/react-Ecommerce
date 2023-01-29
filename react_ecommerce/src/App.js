import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Components/About'
import { AllProducts } from './Components/AllProducts'
import Cart from './Components/Cart'
import Contact from './Components/Contact'
import ErrorPage from './Components/ErrorPage'
import Home from './Components/Home'
import Products from './Components/Products'

import Navbar from './NavBar/Navbar'

function App() {
 
  
  
  

  return (
    <div className=' App '>
      <Navbar/>
      
      <Routes>
      
        <Route path="/" element={ <Home/> } />
        <Route path="About" element={ <About/> } />
        <Route path="/All_Products/:id" element={ <AllProducts/> } />
        <Route path="/Products/:id" element={ <Products/> } />
        <Route path="Contact" element={ <Contact/> } />
        <Route path="Cart" element={ <Cart/> } />
        <Route path="*" element={ <ErrorPage/> } />
        
      </Routes>
      
      
      
    </div>
  )
}

export default App