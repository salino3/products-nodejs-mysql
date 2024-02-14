import React from "react";
import { useNavigate } from "react-router-dom";
import { ProductProps } from "@/core";
import { SwitchRoutes } from "@/router";
import './card-product.styles.css';

interface Props {
  item: ProductProps;
  customeStyles?: string;
  hidden?: boolean;
};

export const CardProduct: React.FC<Props> = (props) => {
    const {item, customeStyles, hidden = true} = props;

    const navigate = useNavigate();

    return (
      <div key={item?.id} className={`containerCard ${customeStyles}`}>
        <h3>
          <span className="spanKey">Name: &nbsp;</span>
          <span className="spanValue">{item?.name}</span>
        </h3>
        <h3>
          <span className="spanKey">Company: &nbsp;</span>
          <span className="spanValue">{item?.company}</span>
        </h3>
        <h3>
          <span className="spanKey">Quantity: &nbsp;</span>
          <span className="spanValue">{item?.quantity}</span>
        </h3>
        <h3>
          <span className="spanKey">Product code: &nbsp;</span>
          <span className="spanValue">{item?.code}</span>
        </h3>
        <h3>
          <span className="spanKey">price: &nbsp;</span>
          <span className="spanValue">{item?.price} €</span>
        </h3>
       {hidden &&      
        <div className="containerBtns">
            <button className="updateBtn" onClick={() => navigate(`${SwitchRoutes?.productInfo}/${item?.id}`)}>
                Update
            </button>
            <button className="deleteBtn">
                Delete
            </button>
        </div>
        }
      </div>
    );
}