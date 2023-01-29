import axios from "axios";
import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { reducerFunction } from "../Reducer/Reducer";



const API = "https://noormohammadpatwary.github.io/EcommerceApi/Ecommerce.json";
const InnitialState = {
  IsLoading: false,
  featureProduct: [],
  products:[],

  IsError: false,
  isSingleLoading:false,
  IsSingleProduct:{},
  isSingleError:false,
};
 




export const MyContext = createContext();
export const MyProvider = ({ children }) => {
    
  // From Here Global Code Will be start writing

  
  const getProducts = async (url) => {
    dispatch({ type: "IsLoading" });
    try {
      const resPonse = await axios.get(url);
      const Products = resPonse.data;
      console.log(
        "🚀 ~ file: AppContext.js:19 ~ getProducts ~ Products",
        Products
      );
      dispatch({ type: "featureProduct", payload: Products });
    } catch (error) {}
    dispatch({ type: "isError" });
  };


//  singleProduct Context
  const getSingleProduct = async (url) => {
    dispatch({ type: "isSingleLoading" });
    try {
      const res = await axios.get(url);
      const SingleData = res.data;
      dispatch({ type : "isSingleData" ,  payload: SingleData })
    } catch (error) {
        dispatch({type : "isSingleError"})
    }
  };
  

  useEffect(() => {
    getProducts(API);
    
  },[]);

  

  const [state, dispatch] = useReducer(reducerFunction, InnitialState);
  
  
  return (
    <MyContext.Provider value={{ CompanyName: " AmazoneClone", ...state , getSingleProduct}}>
      {" "}
      {children}
    </MyContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(MyContext);
};
