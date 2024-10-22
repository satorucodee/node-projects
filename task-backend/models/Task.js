import mongoose from "mongoose";
import { assignSchema } from "./Assign";

export const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      reqired: true
    },
    note: {
      type: String
    },
    status: {
      type: Boolean,
      default: false,
      required: true
    },
    dueDate: {
      type: Date,
      required: true
    },
    assign: [assignSchema]
  },
  { timestamps }
);

export const TaskModal = mongoose.model("Tasks", taskSchema);
