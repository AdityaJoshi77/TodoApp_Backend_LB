
const Todo = require('../models/todoModel.js');


// DELETE API
// Deletes task by id
const deleteTodo = async (req,res) => {
    try{
        // fetching the id of the todo to be deleted
        const id = req.params.id;

        // finding the task by id and deleting it
        const task = await Todo.findByIdAndDelete({_id:id});

        //response incase of failure
        if(!task){
            return res.status(404).json({
                success: false,
                data: task,
                message: `Task with id ${id} not found`
            });
        }

        // response in case of success
        res.status(200).json({
            success: true,
            data: task,
            message: `Task with id ${id} deleted successfully`
        });
    }
    catch(err){
        console.error(err);
        console.log(err.message);
        res.status(500).json({
            success: false,
            data: err,
            message: 'internal server error'
        });
    }
}


// DELETE API
// deletes all records
const deleteAll = async (req,res) => {
    try{
        Todo.deleteMany({_id});
        res.status(200).json({
            success: true,
            message: 'All records deleted successfully'
        })
    }
    catch(err){
        console.error(err);
        console.log(err.message);
        res.status(500).json({
            success: false,
            data: err,
            message: 'internal server error'
        });
    }
}
module.exports = {deleteTodo,deleteAll};