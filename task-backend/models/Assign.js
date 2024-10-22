import mongoose from "mongoose";

export const assignSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    occupation: {
      type: String
    },
    profilePic: {
      type: String,
      require: true
    }
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

export const AssignModel = mongoose.model("Assigns", assignSchema);
