export const FiltreReducerFunction=(state, action)=>{
  switch(action.type){
    case "LoadFilterProduct":
      return{
        ...state,
        AllProductsList: action.payload,
        FilterProducts: action.payload
      }
    case "Gate_sort_value":
      return{
        ...state,
        FilterDataValue: action.payload,
      }
    case "Gate_filter_value":
      let x_filter_value = action.payload
      x_filter_value = x_filter_value.filter((item) => {
        return item.name.toLowerCase().includes(state.filters.text.toLowerCase());
      });
      return{
        ...state,
        FilterProducts: x_filter_value,
      }
    case "Update_Serch_filter_value":
      return{
        ...state,
        filters: {
          ...state.filters,
          [action.payload]: action.value},
      }
      

      case "Gate_filter_value2":
      let { AllProductsList }= state;
      let tempProduct = [...AllProductsList];
      let {text} = state.filters;
      let {category} = state.filters;
      console.log("🚀 ~ file: FilterReducer.js:37 ~ FiltreReducerFunction ~ category:", category)

      if (text) {
        tempProduct=tempProduct.filter((currentElm)=>currentElm.name.toLowerCase().startsWith(text))
      }
      if (category) {
        tempProduct=tempProduct.filter((currentElm)=>currentElm.category===category)
      }

      return{
        ...state,
        FilterProducts: tempProduct,
      }
    default:
      return state;
  }
}
