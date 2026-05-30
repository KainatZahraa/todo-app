const Todo = require('../models/Todo');

//get all todos

const getTodos = async(req, res) => {
    try{
        const todos = await Todo.find().sort({ createdAt : -1 });
        res.json(todos);
    } catch(error){
        res.status(500).json({ message:error.message });
    }
};

//post create a todo

const createTodo = async(req, res) => {
    try{
        const todo = new Todo({ text: req.body.text });
        await todo.save();
        res.status(201).json(todo);
    } catch(error){
        res.status(400).json({ message: error.message });
    }
};

//put toggle complete

const toggleTodo = async(req, res) => {
    try{
        const todo = await Todo.findById(req.params.id);
        if(!todo) return res.status(404).json({message:'Todo not found'});
        todo.completed = !todo.completed;
        await todo.save();
        res.json(todo);
    } catch(error){
        res.status(500).json({ message: error.message });
    }
};

// delete a todo

const deleteTodo = async(req, res) => {
    try{
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if(!todo) return res.status(404).json({message:'Todo not found'});
        res.json({message:'Todo deleted'})
    } catch{
        res.status(500).json({message: error.message});
    }
};

module.exports = {getTodos, createTodo, toggleTodo, deleteTodo};


