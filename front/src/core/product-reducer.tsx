import { State, All_Actions } from "./interface";

export const ProductReducer = (state: State, action: All_Actions) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };


    default:
      return state;
  }
};
