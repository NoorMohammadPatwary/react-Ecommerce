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
    return state;
}