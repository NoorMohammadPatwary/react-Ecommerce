import React from 'react'
import { MdGridView, MdViewList } from 'react-icons/md'
import { useFilterContext } from '../Context/FilterContext'
// import MultipleSelect from './MultipleSelect'



export const Sort = () => {
  const {SortingDataGateFunction,FilterDataValue} =useFilterContext();
  console.log("🚀 ~ file: Sort.js:10 ~ Sort ~ FilterDataValuexxxxxxxxxxxxxxx", FilterDataValue)
  
  
  return (
    <>
   <div className=' d-flex align-items-center justify-content-around'>
   <section>
    <button type="submit" className=' btn btn-outline-dark m-1'> <MdGridView/>  </button>  
    <button type="submit" className=' btn btn-outline-dark m-1' > <MdViewList/>  </button>  
    </section>

    <section>
    {/* <MultipleSelect/> */}
    <form>
      <label htmlFor="sort "></label>

       <select name="sort" id="sort" className="" onClick={SortingDataGateFunction}>
        <option value="lowest" className=''>Lowest</option>
        <option value="highest">Highest</option>
        <option value="a-z">a-z</option>
        <option value="z-a">z-a</option>


       </select>
    </form>
    </section>
   </div>
    </>
  )
}
