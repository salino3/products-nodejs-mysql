import express, { Request, Response } from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';
import { send } from "process";



dotenv.config();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/api/', (req: Request, res: Response) => { 
    res.send("Hello world!")
});

app.get('/api/products', async (req: Request, res: Response) => {

    try {
        
     const products = await axios.get("http://localhost:3000/products");
    
     if(!products.data || products.data.lenght < 1){
        return res.send({message: "The list is empty"});
     };
     
     res.send(products.data);
    } catch (error) {
        console.error(error);
        return res.sendStatus(401);
    };
})

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});


