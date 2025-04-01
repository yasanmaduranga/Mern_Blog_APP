import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js';
import commentRouter from './routes/comment.route.js';

dotenv.config();

const app = express();

const port = process.env.PORT || 8000;
const mongoUrl = process.env.MONGOURL;

mongoose.connect(mongoUrl)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);  
})



