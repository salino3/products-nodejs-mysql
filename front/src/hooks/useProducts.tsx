import React from "react";
import { useNavigate } from "react-router-dom";
import { SwitchRoutes } from "@/router";
import { MyState, ProductProps, routesApp } from "@/core/interface";
import { GlobalContext } from "../core/global-context";

export const useProducts = () => {
  const { dispatch } = React.useContext<MyState>(GlobalContext);
  const navigate = useNavigate();


  //
  const updateProductData = React.useCallback(
    async (item: ProductProps) => {
      try {
        const response = await fetch(
          `${routesApp.products}/${item?.id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item),
          }
        );
        const res = await response.json();
        if (!response.ok) {
          console.log("RESPONSE: ", res?.message);

          throw new Error("Failed to update product");
        } else {
          console.log("RESPONSE: ", res);
          navigate(SwitchRoutes.root);
        };
      } catch (error) {
        console.error(error);
      }
    },
    [dispatch]
  );

  //
  const createProduct = React.useCallback(
    async (item: ProductProps) => {
      try {
        const newProduct = await fetch(`${routesApp.products}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(item),
        });

        
        const newProductData = await newProduct.json();
   
        if (!newProduct.ok) {
          throw new Error("Failed to create new product");
        } else {
          console.log("RESPONSE: ", newProductData?.message);
          return newProductData;
        };
      } catch (error) {
        console.error(error);
      };
    },
    [dispatch]
  );

  //
  const deleteProduct = React.useCallback(async (id: string) => {

    try {
      const response = await fetch(`${routesApp.products}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });
       const res = await response.json();
      if (!response.ok) {
        throw new Error("Failed to update product");
      } else {
        console.log("RESPONSE: ", res?.message);
        alert("Product deleted succesfully!")
        return true;
      };
    } catch (error) {
      console.error(error);
    };
  }, [dispatch]);

  return {
    updateProductData,
    createProduct,
    deleteProduct
  };
};
