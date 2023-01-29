import { createContext, useContext, useEffect, useReducer } from "react";
import { FiltreReducerFunction } from "../Reducer/FilterReducer";
import { useProductContext } from "./AppContext";
const InnitialState={
    FilterProducts: [],
    AllProductsList: [],
    Gridvew: true,
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
    

    return <FilterContext.Provider value={{  ...state ,setGridvewF}}  > { children} </FilterContext.Provider>
}


export const useFilterContext=()=>{
    return useContext(FilterContext);
} 