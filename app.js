// Our Dependecies
/*
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
res.send({"message" : "Welcome From Server"});
});

*/
/*=================================*/
/*

app.listen(port, () => {
    console.log(`\n Server is running on port - ${port}\n`);
});
*/


/*

const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

app.use('/.netlify/functions/api', router);

router.get('/test', (req, res) => {
  res.send('Hello from Express API!');
});

module.exports.handler = serverless(app);

*/





import express, { Router } from "express";
import serverless from "serverless-http";

const app = express();
const router = Router();

router.get("/", (req, res) => {
  res.send("Hello from Express API!");
});

app.use("/api/", router);

export const handler = serverless(app);
