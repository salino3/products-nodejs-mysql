import React from "react";
import { GlobalContext, ProductProps, ProductReducer, initialState, routesApp } from ".";

interface Props {
  children: React.ReactNode;
};

export const ProductProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(ProductReducer, initialState);

  const getProducts = React.useCallback(async () => {

    try {
      const res = await fetch(`${routesApp.products}`);
      const response = await res.json();
      dispatch({
        type: "GET_PRODUCTS",
        payload: response,
      });
    } catch (error) {
      console.error(error);
    };
  }, [dispatch]);


  const getOneProduct = React.useCallback(
    async (id: string) => {
      try {
        
        const res = await fetch(`${routesApp.products}/${id}`);
  
        if (res.status === 404) {
          console.log(res?.statusText);
          return;
        };
        const response: ProductProps = await res.json();
        dispatch({
          type: "GET_PRODUCT",
          payload: response,
        });
      } catch (error) {
        console.error(error)
      };
    },
    [dispatch]
  );


  React.useEffect(() => {
    getProducts();
  }, [dispatch, state?.products]);

  return (
    <GlobalContext.Provider
      value={{ state, dispatch, getProducts, getOneProduct }}>
      {children}
    </GlobalContext.Provider>
  );
};
