import { TodoModel } from "../models/todoModel.js";

export const getAllTodos = async (req, res) => {
  TodoModel.find()
    .sort({ date: -1 })
    .then((todos) => res.status(200).json(todos));
};

export const addATodos = async (req, res) => {
  const newTodo = new TodoModel({
    name: req.body.name,
  });
  newTodo
    .save()
    .then((todo) => res.status(200).json(todo))
    .catch((err) => res.status(404).json({ Success: false, message: err }));
};

export const deleteATodo = async (req, res) => {
    TodoModel.findById(req.params.id)
   .then(todo =>todo.remove()
   .then(()=> res.status(200).json({Success:true})))
   .catch(err=> res.status(404).json({ Success:false, message: `Sorry, there isn't  such an id: ${id}` }));
  };