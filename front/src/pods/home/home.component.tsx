import React from "react";
import { GlobalContext, MyState, ProductProps } from "@/core";
import { CardProduct } from "@/common-app";
import { NewProductForm } from "./components";
import './home.styles.css';

export const Home: React.FC = () => {

    const {state} = React.useContext<MyState>(GlobalContext);
    const {products} = state || {};

    return (
      <div className="rootHome">
        <h1>Home Page</h1>
        <NewProductForm />
        <div className="containerList">
          <div className="list">
            {!products || products?.length < 1
              ? "Thera are not products.."
              : products.map((item: ProductProps) => <CardProduct key={item?.id} item={item} />
              )}
          </div>
        </div>
      </div>
    );
}