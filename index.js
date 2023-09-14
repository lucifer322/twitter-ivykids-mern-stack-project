import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auths.js";
import tweetRoutes from "./routes/tweets.js";
import path from "path";

const __dirname = path.resolve();

const app = express();
dotenv.config();

const connect = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("connect to mongodb database");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(cookieParser());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/tweets", tweetRoutes);
// app.use(express.static(path.join(__dirname,"./client/build")));

// app.get('*',function(__,res){
//   res.sendFile(path.join(__dirname,"./client/build/index.html"),function(err){
//     res.status(500).send(err);
//   })
// })

app.get('/a',function(req,res){
  res.send('hello');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  connect();
  console.log("Listening to port 8000");
});
