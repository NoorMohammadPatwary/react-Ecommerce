import { useFilterContext } from "../Context/FilterContext"



export const FilterSection = () => {
  
  const {serchFieldData, filters:{text}}=useFilterContext();
  
  return (

    
    <>
    <section className=" m-2 mt-5">
     
       <form class="" onSubmit={(e)=>e.preventDefault()} >
        <input class="form-control me-2" type="search" placeholder="Search"
          name="text" value={text}  onChange={serchFieldData} />
        {/* <button class="btn btn-outline-success" type="submit" onClick={serchFieldData}>Search</button> */}
      </form>
    </section>
    </>
  )
}
