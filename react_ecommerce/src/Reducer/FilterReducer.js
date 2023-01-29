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
        let userSortValue= document.getElementById("sort");
        let sort_value=userSortValue.options[userSortValue.selectedIndex].value
        return {
         ...state,
         SortingValue: sort_value,    
        }
    }
    return state;
}