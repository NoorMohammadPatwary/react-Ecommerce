import { createContext, useContext, useEffect, useReducer } from "react";
import { FiltreReducerFunction } from "../Reducer/FilterReducer";
import { useProductContext } from "./AppContext";
const InnitialState={
    FilterProducts: [],
    AllProductsList: [],
    FilterDataValue:"z-z"
}





export  const FilterContext = createContext();

export  const FilterContextProvider = ({children})=>{
      const setGridvewF=()=>{
        dispatch ({type :"SetGridvew", payload:!state.Gridvew}) 
      }  
    const { products } = useProductContext();
    
    // console.log("🚀 ~ file: FilterContext.js:12 ~ FilterContextProvider ~ productsxxxxxxxx", products)
    
    const [state, dispatch] = useReducer(FiltreReducerFunction,InnitialState);
   
    useEffect(() => {
        dispatch ({type :"LoadFilterProduct", payload: products})
    },[products])
   
    
    // To sort the products
    const  SortingDataGateFunction=((e) => {
        const x_value=e.target.value;
        dispatch ({type :"Gate_sort_value", payload: x_value})
       
    })
    // To filter the products
   
   
    useEffect(() => {
        dispatch ({type :"Gate_filter_value", payload: products})
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[state.FilterDataValue])
    
 

    

   
   

    return <FilterContext.Provider value={{  ...state ,setGridvewF,SortingDataGateFunction}}  > { children} </FilterContext.Provider>
}


export const useFilterContext=()=>{
    return useContext(FilterContext);
} 