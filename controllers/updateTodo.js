
const Todo = require('../models/todoModel.js');

const updateTodo = async (req,res) => {
    try {
        // extract Todo id from request Parameters :
        const id = req.params.id;

        // extracting new details from the request body:
        const {title, description} = req.body;

        // finding the record by id and updating it.
        const task = await Todo.findByIdAndUpdate({
            _id:id}, {title, description, updatedAt:Date.now()}
        );

        // response in case of failure
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
            message: `Task with id ${id} updated successfully`
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

module.exports = {updateTodo};