export  const FiltreReducerFunction =(state,action)=>{

    if (action.type==="LoadFilterProduct") {
      
       
       
        
            return {
                ...state,
                FilterProducts: [...action.payload ],
                AllProductsList:[...action.payload],
            }
    }

    if (action.type==="SetGridvew") {
       
        return {
          ...state,
          Gridvew:true,    
           
        }
    }

    if (action.type==="Gate_sort_value") {

        
        return {
         ...state,
         FilterDataValue: action.payload,    
        }
    }


    if (action.type==="Gate_filter_value") {
        
        
       let manupulateData=[...state.FilterProducts]
       if (state.FilterDataValue==="a-z") {
         manupulateData.sort((a,b)=> a.name.localeCompare(b.name))
       }
       
       if (state.FilterDataValue==="z-a") {
         manupulateData.sort((a,b)=> b.name.localeCompare(a.name))
       }
    //    ...........
    if (state.FilterDataValue==="lowest") {
        manupulateData.sort((a,b)=> a.price-b.price)
      }
    if (state.FilterDataValue==="highest") {
        manupulateData.sort((a,b)=> b.price-a.price)
      }

        
        return {
         ...state,
         FilterProducts: manupulateData  
        }
    }

    
    return state;
}