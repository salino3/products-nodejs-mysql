import {Router} from 'express';
import { getAllProducts } from '../controllers/products';


const routerProducts = Router();

routerProducts.get('/products', getAllProducts);

export default routerProducts;