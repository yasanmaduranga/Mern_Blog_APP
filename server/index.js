import express from "express";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

console.log(process.env.START);

app.listen(3000, ()=>{
    console.log("server is running");
})



