import React from "react";
import { GlobalContext, MyState, ProductProps } from "@/core";
import { CardProduct } from "@/common-app";
import './home.styles.css';

export const Home: React.FC = () => {

    const {state} = React.useContext<MyState>(GlobalContext);
    const {products} = state || {};

    return (
      <div>
        <h1>Home Page</h1>
        <div className="containerList">
          <div className="list">
            {!products || products?.length < 1
              ? "Thera are not products.."
              : products.map((item: ProductProps) => <CardProduct item={item} />
              )}
          </div>
        </div>
      </div>
    );
}