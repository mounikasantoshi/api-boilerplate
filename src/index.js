import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import persons from "./routes/persons";

const app = express();

//to access dotenv
dotenv.config();

//to use in another domain or project
app.use(cors());
//bodyparser
app.use(bodyParser.json());
// console.log(process.env.MONGODB_URL);

//access DataBase
mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log("connected to DB")
);

//router

app.use("/Persons", persons);

app.get("/", (req, res) => res.json({ name: "mounika" }));

app.listen(8080, () => console.log("server started at 8080"));

//router

// app.use("/Persons", persons);
