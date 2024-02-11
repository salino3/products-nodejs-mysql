import {Router} from 'express';
import { createProduct, deleteProduct, getAllProducts, getOneProducts, updateProduct } from '../controllers/products';


const routerProducts = Router();

routerProducts.get('/products', getAllProducts);

routerProducts.get("/products/:id", getOneProducts);

routerProducts.post("/products", createProduct);

routerProducts.put("/products/:id", updateProduct);

routerProducts.delete("/products/:id", deleteProduct);

export default routerProducts;