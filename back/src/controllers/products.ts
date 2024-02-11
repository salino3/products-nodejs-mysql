import express, { Request, Response } from "express";
import axios from "axios";
import { ProductProps } from "../models/products";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products: ProductProps = await axios.get(
      "http://localhost:3000/products"
    );

    if (!products || products.data.length < 1) {
      return res.send({ message: "The list is empty" });
    }

    res.send(products.data);
  } catch (error) {
    console.error(error);
    return res.sendStatus(401);
  };
};
