import express from "express";
import "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
import { dbConnection } from "./db/database";
import routes from './routes/movie';

//initializing app
const app = express();

//call connection to DB
dbConnection();

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//initializeing routes
app.use('/movies', routes );

//listening on server port
app.listen(process.env.PORT || 4000, () => console.log("Server Online!"));
