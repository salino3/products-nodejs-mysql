import React from "react";
import { GlobalContext } from "./global-context"
import { ProductReducer } from "./product-reducer";
import { initialState } from "./interface";

interface Props {
    children: React.ReactNode
};

export const ProductProvider: React.FC<Props> = ({children}) => {

    const [state, dispatch] = React.useReducer( ProductReducer, initialState);


    return(
        <GlobalContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}