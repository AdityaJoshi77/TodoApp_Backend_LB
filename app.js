
// create a server ==>
const express = require('express');
const app = express();

// set environment variables ==>
require('dotenv').config(); 
port = process.env.PORT;
// use a middle-ware parser to read the json of requests ==>
app.use(express.json());

// import API routes ==>
todoRoutes = require("d:/Programming/Courses/WEB D LB/ToDoApp/routes/todoRoutes");//("./routes/todoRoutes.js");

// use a middleware to mount API routes onto the Request URL ==>
app.use("/api/v1",todoRoutes);

// initialize the server on the designated port ==>
app.listen(port, ()=>{console.log(`Server listening on port ${port}`)});

// // connect DataBase to the server ==> 
const dbConnect = require('d:/Programming/Courses/WEB D LB/ToDoApp/config/database')//('./config/database.js');
dbConnect();



