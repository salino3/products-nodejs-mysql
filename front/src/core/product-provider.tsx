import React from "react";
import { GlobalContext, ProductReducer, initialState } from ".";

interface Props {
    children: React.ReactNode
};

export const ProductProvider: React.FC<Props> = ({children}) => {

    const [state, dispatch] = React.useReducer( ProductReducer, initialState);

const getProduct = React.useCallback( async () => {
 
   const res = await fetch("http://localhost:5000/api/products");
   const response = await res.json();
   dispatch({
    type: "GET_PRODUCTS",
    payload: response
   })
}, [dispatch]);

React.useEffect(() => {
  getProduct();
}, [])

    return(
        <GlobalContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}