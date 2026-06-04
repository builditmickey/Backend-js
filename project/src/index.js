// require("dotenv").config({ path: "./.env" });

import dotenv from "dotenv";

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      cconsole.log(`Server is running at PORT : ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed, ", err);
  });

// either write the logic for DB connection in index.js itself or write it in index.js/db and import in index.js

// approach 1
// function connectDB(){

// }

// connectDB()

// approach 2 using IIFE (Immediately Invoked Function Expression)
// professionals use semicolon at beginning to reduce wrong formatting cases
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//   } catch (error) {
//     console.error("ERROR : ", error);
//     throw error;
//   }
// })();
