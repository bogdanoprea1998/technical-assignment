import { Schema, model, models } from "mongoose";
import { movieSchema } from "./movieModel";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    favorites: {
      type: [movieSchema],
    },
  },
  { timestamps: true }
);

const UserModel = models.user || model("user", userSchema);

export default UserModel;
