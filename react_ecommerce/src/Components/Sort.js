import React from 'react'
import { MdGridView, MdViewList } from 'react-icons/md'



export const Sort = () => {
 
  return (
    <>
    <section>
    <button type="submit" className=' btn btn-outline-dark m-1'> <MdGridView/>  </button>  
    <button type="submit" className=' btn btn-outline-dark m-1' > <MdViewList/>  </button>  
    </section>
    </>
  )
}
