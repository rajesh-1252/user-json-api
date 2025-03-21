import express from 'express';
import "express-async-errors";
import cors from 'cors';
import 'dotenv/config';
import { testConnection } from './db/connect.js';
import morgan from "morgan";
import AppRouter from './route.js';
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.use('/', AppRouter)

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

app.listen(PORT, async () => {
  await testConnection();
});
