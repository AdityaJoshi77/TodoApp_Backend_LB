
/*
    => Our todoApp will store the data in the MongoDB database in the form of an object
    
    => In order to create that object, we first need the schema for the same,
        - Therefore, we first import the schema from the todoModel.js with the following:
        - const Todo = require('../models/todoModel.js')    
    
    
*/

const Todo = require('../models/todoModel.js');



// POST API
// creates new task in DB.
const createTodo = async (req,res) =>{
    try{
        // extract title and description from the request body
        const {title,description} = req.body;

        // create an object having the Todo schema which will be stored in the database.
        // const response = {title,description};
        const response = await Todo.create({title,description});
        // create a json response in case of success:
        res.status(200).json({
            success: true,
            data: response,
            message: 'Successful Entry',
        });
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({
            success: false,
            data: 'internal server error',
            message: 'Todo creation failed',
        });
    }
}

module.exports = {createTodo};