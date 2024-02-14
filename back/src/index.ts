import express, { Request, Response } from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import routerProducts from "./routes/products";



dotenv.config();

const app = express();
app.use(cors(
    
));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/api', (req: Request, res: Response) => { 
    res.send("Hello world!")
});

app.use("/api", routerProducts);

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});


