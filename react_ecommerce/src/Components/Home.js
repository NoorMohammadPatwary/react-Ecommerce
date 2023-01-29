
import React from 'react'
import FeatureProduct from './FeatureProduct'
import Footer from './Footer'
import HeroSec from './HeroSec'
import Services from './Services'
import Trusted from './Trusted'



function Home() {
  
  
  return (
   <>
   
   <HeroSec StoreName={"Noor Ecommerce "}/>
   <FeatureProduct/>
   <Services/>
   
   <Trusted/>
   <Footer/>
   </>
  )
}

export default Home