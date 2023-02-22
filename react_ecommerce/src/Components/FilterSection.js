import { useFilterContext } from "../Context/FilterContext"



export const FilterSection = () => {
  
  const {serchFieldData, filters:{text,category},AllProductsList}=useFilterContext();
  console.log("🚀 ~ file: FilterSection.js:8 ~ FilterSection ~ category:", category)

  // To get the Data Of Each Field
  const  getUniQueData =(data,property)=>{
    // return [...new Set(data.map(item => item[property]))]
  let newVal=data.map((currentElm)=>currentElm[property]);
  return( newVal=  [ "All",...new Set(newVal)])

  }
  
  
  const  CatagoryOnlyData= getUniQueData(AllProductsList,"category");
  
  return (

    
    <>
    {/* Search Filter datat to cretae dynami ck seaarch  */}
    <section className=" m-2 mt-5">
     
       <form class="" onSubmit={(e)=>e.preventDefault()} >
        <input class="form-control me-2" type="search" placeholder="Search"
          name="text" value={text}  onChange={serchFieldData} />
        {/* <button class="btn btn-outline-success" type="submit" onClick={serchFieldData}>Search</button> */}
      </form>
    </section>

    <section>
      <h3> Category </h3>
      <div>
        {
          CatagoryOnlyData.map((currentElm,Index)=>{
            return <button 
            key={Index}
            type="button"
            name="category"  
            value={currentElm}
            className="d-flex align-items-center justify-content-center btn " 
            onClick={serchFieldData} 
             >{currentElm}</button>
          })
        }
      </div>
    </section>

    {/* Search Filter datat to cretae dynami ck seaarch End   */}

    {/*Catagor Wise Filtering and geting Unique value of an object  */}


    {/*Catagor Wise Filtering and geting Unique value of an object End  */}
    </>
  )
}
