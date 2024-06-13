
const Todo = require('../models/todoModel.js');

// GET API
// currently does not do anything
const getTodo = async (req,res) => {
    try {
        const tasks = await Todo.find({}); 
        // Todo.find({}) function, when called with an empty object as a parameter 
        //will fetch all the entries of the database.

        res.status(200).json({
            success: true,
            data: tasks,
            message: 'All tasks fetched successfully'
        });
    }
    catch(err){
        console.error(err);
        console.log(err.message);
        res.status(500).json({
            success: false,
            data: err,
            message:'Task fetching failed'
        });
    }
}

const getTodoById = async (req,res) => {
    try{

        // fetching the id from the request parameters
        const id = req.params.id;

        // fetching the task from the database on the basis of id
        const taskFound = await Todo.findById({_id : id});
        
        // defining response in case of failure
        if(!taskFound){
            return res.status(404).json({
                success: false,
                data:`Task with id ${id} not found`
            });
        }

        // defining response in case of success
        res.status(200).json({
            success: true,
            data: taskFound,
            message: 'Task fetched successfully'
        })
    }
    catch(err){
        console.error(err);
        console.log(err.message);
        res.status(500).json({
            success: false,
            data: err,
            message:'Task fetching failed'
        });
    }
}

module.exports = {getTodo,getTodoById};