import 'dotenv/config';
import express, { Request, Response } from 'express';
import cookieparser from "cookie-parser";
import cors from 'cors';
import mongoose from 'mongoose';
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth"


mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();

app.use(cookieparser());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.FROEND_URL,
    credentials: true,
  }
  ));



app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)

app.listen(7000, () => {
  console.log("server running on localhost:7000");
});

