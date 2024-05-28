import 'dotenv/config';  
import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';


mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/app/test", async (req: Request, res: Response) => {
  res.json({ message: "hello from express endpoint! go ball bro guy !!!!!!!!!!!!!" });
});

app.listen(7000, () => {
  console.log("server running on localhost:7000");
});

