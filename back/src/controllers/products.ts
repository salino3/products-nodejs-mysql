import { Request, Response } from "express";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { ProductProps } from "../models/products";


export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products: ProductProps = await axios.get(
      "http://localhost:3000/products"
    );

    if (!products || products.data.length < 1) {
      res.sendStatus(204).send({ message: "The list is empty" });
      return;
    };

    res.send(products.data);
  } catch (error) {
    console.error(error);
    res.sendStatus(401);
    return; 
  };
};

export const getOneProducts = async (req: Request, res: Response): Promise<void> => {

    const {id} = req.params;
    try {
        const product: ProductProps = await axios.get(`http://localhost:3000/products/${id}`);

        if(!product || !product.data){
            res.status(404).send({ message: "Product Not Found" });
            return;
        };
        
        res.send(product.data);
    } catch (error) {
     console.error(error);
      res.sendStatus(500);    
      return;
    };
};



export const createProduct = async ( req: Request, res: Response): Promise<void> => {
  const { body } = req;

  try {
    const newProduct: ProductProps = await axios.post("http://localhost:3000/products", 
    {...body, id: uuidv4() },
    {
      headers: {"Content-Type": "application/json"}
    });

    if(!newProduct){
        res.status(204).send({message: "Error for create a product"});
        return;
    };

    res.status(200).send(newProduct.data);
  } catch (error) {
   console.error(error);
   res.sendStatus(500);
   return;
  }
};


export const updateProduct = async (req: Request, res: Response): Promise<void> => {
    const {id} = req.params;
    const {body} = req;

 try {
    const product = await axios.get(`http://localhost:3000/products/${id}`);

    if(!product || !product.data){
       res.status(404).send({ message: "Product Not Found" });
       return;
    };
    
   const productUpdated: ProductProps = await axios.put(
     `http://localhost:3000/products/${id}`,
     {
       name: body.name || product.data.name,
       quantity: body.quantity || product.data.quantity,
       code: body.code || product.data.code,
       price: body.price || product.data.price,
       company: body.company || product.data.company,
     },
     {
       headers: { "Content-Type": "application/json" },
     }
   );

   if (!productUpdated) {
     res.status(204).send({ message: "Error for create a product" });
     return;
   };

    res.status(200).send(productUpdated.data);
 } catch (error) {
       console.error(error);
       res.sendStatus(500);
       return;
 };
};


export const deleteProduct = async (req: Request, res: Response): Promise<void> => {

      const {id} = req.params;

      try {
          const product: ProductProps = await axios.delete(`http://localhost:3000/products/${id}`)
        
        if (!product.data) {
          res.status(404).send({ message: "Product Not Found" });
          return;
        };

          res.status(200).send({ message: "Product Deleted Successfully" });
      } catch (error) {
        console.error(error);
        res.sendStatus(500);
        return;
      };
};




