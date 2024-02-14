import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext, ProductProps, ProductReducer, initialState } from ".";
import { SwitchRoutes } from "@/router";

interface Props {
  children: React.ReactNode;
}

export const ProductProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(ProductReducer, initialState);
  const navigate = useNavigate();
  const getProducts = React.useCallback(async () => {
    const res = await fetch("http://localhost:5000/api/products");
    const response = await res.json();
    dispatch({
      type: "GET_PRODUCTS",
      payload: response,
    });
  }, [dispatch]);

  const getOneProduct = React.useCallback(
    async (id: string) => {
      const res = await fetch(`http://localhost:5000/api/products/${id}`);
      const response: ProductProps = await res.json();
      dispatch({
        type: "GET_PRODUCT",
        payload: response,
      });
    },
    [dispatch]
  );

  const updateProductData = React.useCallback(async (item: ProductProps) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/products/${item?.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(item),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update product");
      } else {
        await getProducts();
        navigate(SwitchRoutes.root);
      };
    } catch (error) {
      console.error(error);
    };
  }, []);

  React.useEffect(() => {
    getProducts();
  }, [dispatch]);

  return (
    <GlobalContext.Provider
      value={{ state, dispatch, getProducts, getOneProduct, updateProductData }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
