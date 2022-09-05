import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { DataBaseConnect } from "./src/config/connectDB.js";
// import  itemsRoutes from './routes/items.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

DataBaseConnect();

//Use Routes
// app.use('/',itemsRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started at port ${port}`));
