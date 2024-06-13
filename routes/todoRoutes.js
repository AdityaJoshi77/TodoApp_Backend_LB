
// We need a router to map the routes with the controllers
// For the router we need an instance of the express

const express = require('express');
const router = express.Router();

// We need to import the controller to be mapped with the route
const {createTodo} = require('../controllers/createTodo.js');
const {getTodo,getTodoById} = require('../controllers/getTodos.js');
const {updateTodo} = require('../controllers/updateTodo.js');
const {deleteTodo,deleteAll} = require('../controllers/deleteTodo.js');


// router.<CRUD_op>() will decide how the request coming at the /createTodo will be treated
router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);
router.get("/getTodo/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);
router.delete("/deleteAll/all",deleteAll);

module.exports = router;
