import mongoose from "mongoose";
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: String,
  description: String,
  tags: String,
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
