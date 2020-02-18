import express from "express";
import "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
import { dbConnection } from "./db/database";
import routes from './routes/movie';

//initializing app
const app = express();

//connection to DB
dbConnection();

//initializeing routes
app.use('/movies', routes );

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//listening on server port
app.listen(process.env.PORT || 4000, () => console.log("Server Online!"));
