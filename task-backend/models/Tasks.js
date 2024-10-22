import mongoose from "mongoose";
import { taskSchema } from "./Task";

const tasksSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true
    },
    icon: {
      type: String,
      required: true
    },
    taskCount: {
      type: Number,
      require: true
    },

    tasks: {
      tyep: [taskSchema],
      required: true
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

export const TasksModel = mongoose.model("TaskaModel", tasksSchema);
