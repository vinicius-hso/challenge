import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import "reflect-metadata";

import routes from "./routes";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    next();
  });
app.use(express.json()); 
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  })); 

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));

app.use(routes);
