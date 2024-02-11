import express, { Request, Response } from "express";
import cors from 'cors';
import dotenv from 'dotenv';



dotenv.config();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/api/', (req, res) => {
    res.send("Hello world!")
});

app.listen(() => {
    console.log("Server running on port " + process.env.PORT);
});


