import React from "react";
import { GlobalContext, MyState, ProductProps } from "@/core";
import './home.styles.css';

export const Home: React.FC = () => {

    const {state} = React.useContext<MyState>(GlobalContext);
    const {products} = state || {};

    return(
        <div>
         <h1>Home Page</h1>
         <div className="containerList">

             <div className="list">
         {
             !products || products?.length < 1 ? "Thera are not products.." 
             : products.map((item: ProductProps) => (
                 <div key={item?.id}>
                 {item?.company}
                </div>
            ))
            }
            </div>
         </div>
        </div>
    )
}