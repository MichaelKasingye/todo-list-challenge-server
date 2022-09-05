import mongoose from "mongoose";

const Schema = mongoose.Schema;

//create Schema
const TodoSchema = new Schema({
    name:{
        type:String,
        required: true
    }
});

export const TodoModel = mongoose.model('Todo',TodoSchema);