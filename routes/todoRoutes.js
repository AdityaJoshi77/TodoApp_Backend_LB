
// We need a router to map the routes with the controllers
// For the router we need an instance of the express

const express = require('express');
const router = express.Router();

// We need to import the controller to be mapped with the route
const {createTodo} = require('../controllers/createTodo.js');

// router.<CRUD_op>() will decide how the request coming at the /createTodo will be treated
router.post("/createTodo",createTodo);

module.exports = router;
