import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { FiltreReducerFunction } from "../Reducer/FilterReducer";
import { useProductContext } from "./AppContext";
const InnitialState={
    FilterProducts: [],
    AllProductsList: [],
   SortingValue: "Lowest"
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
    }, [products])

    const  Sorting=((e) => {
        const x_value=e.target.value
        console.log("🚀 ~ file: FilterContext.js:29 ~ Sorting ~ x_value", x_value)
        dispatch ({type :"Gate_sort_value", payload: x_value})
    })


    return <FilterContext.Provider value={{  ...state ,setGridvewF,Sorting}}  > { children} </FilterContext.Provider>
}


export const useFilterContext=()=>{
    return useContext(FilterContext);
} 