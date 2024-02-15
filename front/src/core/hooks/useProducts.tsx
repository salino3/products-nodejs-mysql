import React from "react";
import { useNavigate } from "react-router-dom";
import { SwitchRoutes } from "@/router";
import { MyState, ProductProps } from "../interface";
import { GlobalContext } from "../global-context";


export const useProducts = () => {

    const {getProducts, dispatch} = React.useContext<MyState>(GlobalContext);
    const navigate = useNavigate();

    //
      const updateProductData = React.useCallback(
        async (item: ProductProps) => {
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
              navigate(SwitchRoutes.root);
            }
          } catch (error) {
            console.error(error);
          };
        },
        [dispatch]
      );

    //
    const createProduct = React.useCallback( async (item: ProductProps) => {

        try {
            
            const newProduct = await fetch("http://localhost:5000/api/products", {
               method: "POST",
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify(item)
            });
            
            const newProductData = await newProduct.json(); 
            if (!newProduct.ok) {
              throw new Error("Failed to create new product");
            } else {
              return newProductData;
            };
        } catch (error) {
            console.error(error);
        };
    }, [dispatch]);

 return {
   updateProductData,
   createProduct,
 };
};