export const reducerFunction = (state,action)=>{
    if (action.type==="IsLoading") {
        return {
            ...state,
            IsLoading:true,
        
            }
    }
    if (action.type==="featureProduct") {
        const FeatureProduct= action.payload.filter((currentElement,index)=>currentElement.featured===true)
        console.log(FeatureProduct);
        
        return {
            ...state,
            IsLoading:false,
            featureProduct:FeatureProduct,
            products:action.payload

            
        
            }
    }

    if (action.type==="IsError") {
        return {
            ...state,
            IsError:true,
        
            }
    }





    if (action.type==="isSingleLoading") {
        
        return {
            ...state,
            isSingleLoading:true,
            

            
        
            }
    }
    if (action.type==="isSingleData") {
        
        return {
            ...state,
            
            IsSingleProduct:action.payload,
            isSingleLoading:false,

            
        
            }
    }
    if (action.type==="isSingleError") {
        
        return {
            ...state,
            isSingleError:true,

            
        
            }
    }








    return state;
}