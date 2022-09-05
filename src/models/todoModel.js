import mongoose from "mongoose";

const Schema = mongoose.Schema;

//create Schema
const TodoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

export const TodoModel = mongoose.model("Todo", TodoSchema);
